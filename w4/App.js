import {StatusBar} from 'expo-status-bar';
import {TouchableOpacity, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [value, setValue] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tittle}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Test</Text>
            </View>
            <View style={styles.countBase}>
                <View style={styles.count}>
                    <TouchableOpacity
                        onPress={() => setValue(value - 1)}
                        style={styles.button}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>-</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>{value}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setValue(value + 1)}
                        style={styles.button}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tittle: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    countBase: {
        flex: 3,
        width: '100%'
    },
    count:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 20,
        width: 80,
        height: 40,
        borderColor: 'black',
        marginLeft: 5,
        marginRight: 5,
    }
});
