import React, {Component} from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'

import Button from './Button'

const Buttons = (props) => {

    const numbers = [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        [',', '0', '='],
    ]
    const operations = ['C', '÷', '×', '-', '+']

    const operatorSelected = operation => props.operation(operation)

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.numbers}>
                {numbers.map((row, i) =>
                    <View key={i} style={styles.row}>
                        {row.map(char =>
                            <Button key={char} char={char} operation={operatorSelected}/>
                        )}
                    </View>
                )}
            </SafeAreaView>
            <SafeAreaView style={styles.operations}>
                {operations.map(char =>
                    <Button key={char} char={char} operation={operatorSelected}/>
                )}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'row',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    numbers: {
        flex: 3,
    },
    operations: {
        flex: 1,
        backgroundColor: '#2779bd'
    }
})

export default Buttons;
