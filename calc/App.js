import React, {Component, useState} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';

import Display from './src/components/Display'
import Buttons from './src/components/Buttons'

const App = () => {

    const [state, setState] = useState({display: '', result: ''})

    const setOperation = o => {
        switch (o) {
            case 'C':
                setState({
                    display: '',
                    result: ''
                })
                break
            case '=':
                setState({
                    display: state.result,
                    result: ''
                })
                break
            default:
                const display = state.display + o
                let result = state.result
                try {
                    let fixedOperation = display.split('×').join('*')
                    fixedOperation = fixedOperation.split('÷').join('/')
                    fixedOperation = fixedOperation.split(',').join('.')

                    result = String(eval(fixedOperation)).toString()
                } catch (e) {
                }
                setState({
                    display: display,
                    result: result
                })
                break
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Display state={state}/>
            <Buttons operation={setOperation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#141d26',
    },
});

export default App;
