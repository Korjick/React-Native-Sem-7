import React from "react";
import {
    Text,
    View,
    StyleSheet, TouchableOpacity
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {observer} from "mobx-react-lite";
import CartStore from "../stores/CartStore";

const styles = StyleSheet.create({
    root: {
        width: 100,
        height: 25,
        flexDirection: 'row'
    },
    rect: {
        width: 25,
        height: 25
    },
    count: {
        width: 50,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countText: {
        color: 'blue',
        fontSize: 18
    }
});

const CartCounter = observer((props) => {
    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.rect} onPress={props.increase}>
                <AntDesign name="plussquareo" size={25} color="blue" />
            </TouchableOpacity>
            <View style={styles.count}>
                <Text style={styles.countText}>{props.count}</Text>
            </View>
            <TouchableOpacity onPress={props.decrease}>
                <AntDesign name="minussquareo" size={25} color="blue" />
            </TouchableOpacity>
        </View>
    )
})

export default CartCounter;
