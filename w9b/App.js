import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {observer} from "mobx-react-lite";
import ClickStore from "./ClickStore";
import {makeObservable} from "mobx";
import CounterStore from "./CounterStore";

const counterStore = new CounterStore(ClickStore);
const OnIncrement = () => counterStore.increment()
const OnDecrement = () => counterStore.decrement()
const OnReset = () => counterStore.reset()

const App = observer(function () {
        return (<View style={styles.container}>
            <Text style={styles.item}>{counterStore.count}</Text>
            <View style={styles.item}><Button onPress={OnIncrement} title="+"/></View>
            <View style={styles.item}><Button style={styles.item} onPress={OnDecrement} title="-"/></View>
            <View style={styles.item}><Button style={styles.item} onPress={OnReset} title="Reset"/></View>
            <Text style={styles.item}>{ClickStore.count}</Text>
        </View>)
    }
)

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
