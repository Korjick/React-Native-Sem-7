import {StatusBar} from 'expo-status-bar' ;
import {AntDesign} from '@expo/vector-icons';
import React, {useEffect, useState} from 'react' ;
import {
    Button,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    SafeAreaView,
    Pressable
} from 'react-native' ;
import TodoLine from "../components/TodoLine";


const HomeScreen = ({navigation}) => {
    const [newTodos, setNewTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    const [text, setText] = useState('');

    const keyExtractor = (index) => index.toString()
    const renderItem = (item, value, newTodos, completeTodos) => <TodoLine navigation={navigation} item={item}
                                                                           complete={value}
                                                                           newTodos={newTodos}
                                                                           completeTodos={completeTodos}
                                                                           setCompleteTodos={setCompleteTodos}
                                                                           setNewTodos={setNewTodos}/>

    const addTodo = () => {
        let newTodo = [...newTodos];
        newTodo.push(text);
        setNewTodos(newTodo);
        setText('');
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>NEW:</Text>
            </View>
            <FlatList
                style={styles.list}
                contentContainerStyle={{alignItems: 'center'}}
                data={newTodos}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({item, index, separators}) => renderItem(item, false, newTodos, completeTodos)}
            />
            <View style={styles.titleBox}>
                <Text style={styles.title}>COMPLETE:</Text>
            </View>
            <FlatList
                style={styles.list}
                contentContainerStyle={{alignItems: 'center'}}
                data={completeTodos}
                keyExtractor={(item, index) => keyExtractor(index)}
                renderItem={({item, index, separators}) => renderItem(item, true, newTodos, completeTodos)}
            />
            <TextInput placeholder='TODO Name'
                       underlineColorAndroid='#D3D3D3'
                       style={styles.textInput}
                       onChangeText={newText => setText(newText)}
                       value={text}></TextInput>
            <Button title="ADD" onPress={() => addTodo()}></Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea",
        marginTop: StatusBar.currentHeight
    },
    titleBox: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: "black",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "normal",
    },
    textInput: {
        height: 40,
        paddingLeft: 6,
        marginBottom: 15
    },
    list: {
        flex: 1
    }
});

export default HomeScreen;
