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
import {observer} from "mobx-react-lite";
import {AntDesign} from '@expo/vector-icons';
import CartStore from "../stores/CartStore";
import CartCounter from "./CartCounter";
import {Observer} from "mobx-react";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white',
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageWrapper: {
        flex: 1,
        marginRight: 10,
        marginBottom: 10
    },
    imageAndStylesWrapper: {
        alignItems: "center",
        justifyContent: "center"
    },
    textWrapper: {
        flex: 1
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
    favButtonRemove: {
        marginVertical: 18,
        backgroundColor: 'white',
        padding: 10
    },
    buy: {
        color: 'blue',
        fontSize: 24
    }
})

const Cart = observer(({navigation}) => {

    let products = Object.values(CartStore.cart)

    const renderItem = ({item}) => (
        <Observer>{
            () => (<View style={styles.wrapper}>
                <View style={styles.imageAndStylesWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={{uri: item['item'].image}}
                            style={styles.image}
                            resizeMode={'contain'}

                        />
                    </View>
                    <View>
                        {
                            CartStore.cart[item['item'].id] !== undefined ?
                                (
                                    <CartCounter style={styles.favButtonRemove}
                                                 increase={() => CartStore.increaseCart(item['item'])}
                                                 count={CartStore.cart[item['item'].id]['count']}
                                                 decrease={() => CartStore.decreaseCount(item['item'])}>
                                        <AntDesign name="heart" color={"blue"} size={26}/>
                                    </CartCounter>
                                ) :
                                (
                                    <TouchableOpacity style={styles.favButtonAdd}
                                                      onPress={() => CartStore.addCart(item['item'])}>
                                        <AntDesign name="shoppingcart" size={26} color="blue"/>
                                    </TouchableOpacity>
                                )
                        }
                    </View>
                </View>
                <View style={styles.textWrapper}>
                    <Text style={[styles.text, styles.bold]}>{item['item'].title}</Text>
                    <Text style={styles.text}>{item['item'].price + '$'}</Text>
                </View>
            </View>)
        }</Observer>
    )

    return (
        <SafeAreaView style={styles.root}>
            {
                products.length > 0 ?
                    (
                        <View>
                            <FlatList data={products} renderItem={renderItem} keyExtractor={el => el['item'].id}/>
                            <TouchableOpacity style={styles.imageAndStylesWrapper}><Text style={styles.buy}>Buy</Text></TouchableOpacity>
                        </View>
                    ) :
                    (<View style={[styles.imageAndStylesWrapper, styles.textWrapper]}><Text>Nothing to buy</Text></View>)
            }
        </SafeAreaView>
    )
})

export default Cart;
