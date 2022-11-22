import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {observer} from "mobx-react-lite";
import CounterStore from "./CounterStore";
import ClickStore from "./ClickStore";
import {makeObservable} from "mobx";

const App = observer(function () {
        return (<View style={styles.container}>
            <Text style={styles.item}>{CounterStore.count}</Text>
            <View style={styles.item}><Button onPress={() => {
                OnIncrement()
                OnClick()
            }} title="+"/></View>
            <View style={styles.item}><Button style={styles.item} onPress={() => {
                OnDecrement()
                OnClick()
            }}
                                              title="-"/></View>
            <View style={styles.item}><Button style={styles.item} onPress={() => {
                OnReset()
                OnClick()
            }}
                                              title="Reset"/></View>
            <Text style={styles.item}>{ClickStore.count}</Text>
        </View>)
    }
)

const OnIncrement = () => CounterStore.increment()
const OnDecrement = () => CounterStore.decrement()
const OnReset = () => CounterStore.reset()
const OnClick = () => ClickStore.increment()

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        margin: 5
    }
});

export default App;
