import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.operation(props.char)}
            style={styles.container}>
            <Text style={styles.text}>{props.char}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 30
    }
})

export default Button;
