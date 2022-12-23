import React from "react";
import {SafeAreaView, Text, View, StyleSheet, Button, TouchableHighlight, Image} from "react-native";
import {StatusBar} from "expo-status-bar";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'white'
    },
    text: {
        marginVertical: 5
    },
    bold: {
        fontWeight: 'bold'
    },
    goBack: {
      color: 'blue'
    },
    wrapper: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150
    }
})

const Description = ({navigation, route}) => {

    const { item } = route.params;

    return (
        <View style={styles.wrapper}>
            <Image
                source={{uri: item.image}}
                style={styles.image}
                resizeMode={'contain'}
            />
            <Text style={[styles.text, styles.bold]}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
            <Text style={styles.text}>{item.price + '$'}</Text>
            <TouchableHighlight onPress={() => navigation.goBack()}>
                <Text style={[styles.bold, styles.goBack]}>Go back</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Description;
