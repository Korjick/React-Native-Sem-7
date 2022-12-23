import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    Image,
    FlatList,
    TouchableHighlight, TouchableOpacity
} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useState, useEffect} from "react";
import axios from "axios";
import FavouritesStore from "../stores/FavouritesStore";
import {Observer} from "mobx-react";
import ProductsStore from "../stores/ProductsStore";
import { AntDesign } from '@expo/vector-icons';
import CartStore from "../stores/CartStore";
import CartCounter from "./CartCounter";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white'
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageWrapper: {
        flex: 1,
    },
    imageAndStylesWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    textWrapper: {
        flex: 1,
        marginLeft: 30
    },
    text: {
        marginVertical: 5
    },
    bold: {
        fontWeight: 'bold'
    },
    wrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
        padding: 10
    },
    image: {
        width: 150,
        height: 150
    },
    favButtonAdd: {
        marginVertical: 18,
        padding: 10
    },
    favButtonRemove: {
        marginVertical: 18,
        padding: 10
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Home = ({navigation}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios
            .get('https://fakestoreapi.com/products')
            .then(res => {
                ProductsStore.setProducts(res.data)
                setProducts(ProductsStore.products)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    const renderItem = ({item}) => (
        <Observer>
            {() => (<View style={styles.wrapper}>
                    <View style={styles.imageAndStylesWrapper}>
                        <View style={styles.imageWrapper}>
                            <TouchableHighlight onPress={() => navigation.push('Description', {
                                item: item
                            })}>
                                <Image
                                    source={{uri: item.image}}
                                    style={styles.image}
                                    resizeMode={'contain'}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icons}>
                            {
                                FavouritesStore.favourites.includes(item) ?
                                    (
                                        <TouchableOpacity style={styles.favButtonRemove}
                                                          onPress={() => FavouritesStore.deleteFavourite(item)}>
                                            <AntDesign name="heart" color={"blue"} size={26}/>
                                        </TouchableOpacity>
                                    ) :
                                    (
                                        <TouchableOpacity style={styles.favButtonAdd}
                                                          onPress={() => FavouritesStore.addFavourite(item)}>
                                            <AntDesign name="hearto" size={26} color="blue" />
                                        </TouchableOpacity>
                                    )
                            }
                            {
                                CartStore.cart[item.id] !== undefined ?
                                    (
                                        <CartCounter style={styles.favButtonRemove} increase={() => CartStore.increaseCart(item)}
                                                     count={CartStore.cart[item.id]['count']} decrease={() => CartStore.decreaseCount(item)}>
                                            <AntDesign name="heart" color={"blue"} size={26}/>
                                        </CartCounter>
                                    ) :
                                    (
                                        <TouchableOpacity style={styles.favButtonAdd}
                                                          onPress={() => CartStore.addCart(item)}>
                                            <AntDesign name="shoppingcart" size={26} color="blue" />
                                        </TouchableOpacity>
                                    )
                            }
                        </View>
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={[styles.text, styles.bold]}>{item.title}</Text>
                        <Text style={styles.text}>{item.description.substring(0, 100) + '...'}</Text>
                        <Text style={styles.text}>{item.price + '$'}</Text>
                    </View>
                </View>
            )}
        </Observer>)

    return (
        <SafeAreaView style={styles.root}>
            {loading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size={'large'} color={'#000'}/>
                    </View>
                ) :
                (
                    <FlatList data={products} renderItem={renderItem} keyExtractor={el => el.id}/>
                )
            }
        </SafeAreaView>
    )
}

export default Home;
