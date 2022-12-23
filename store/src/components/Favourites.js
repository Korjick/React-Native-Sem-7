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
import FavouritesStore from "../stores/FavouritesStore";
import {observer} from "mobx-react-lite";
import { AntDesign } from '@expo/vector-icons';

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
        marginRight: 10
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
    }
})

const Favourites = observer(({navigation}) => {

    let products = FavouritesStore.favourites

    const renderItem = ({item}) => (<View style={styles.wrapper}>
            <View style={styles.imageAndStylesWrapper}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={{uri: item.image}}
                        style={styles.image}
                        resizeMode={'contain'}

                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.favButtonRemove}
                                      onPress={() => FavouritesStore.deleteFavourite(item)}>
                        <AntDesign name="heart" color={"blue"} size={26}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textWrapper}>
                <Text style={[styles.text, styles.bold]}>{item.title}</Text>
                <Text style={styles.text}>{item.price + '$'}</Text>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={styles.root}>
            {
                products.length > 0 ?
                    (<FlatList data={products} renderItem={renderItem} keyExtractor={el => el.id}/>) :
                    (<View style={[styles.imageAndStylesWrapper, styles.textWrapper]}><Text>No favourites</Text></View>)
            }
        </SafeAreaView>
    )
})

export default Favourites;
