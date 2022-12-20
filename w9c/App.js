import React, {useState} from 'react'
import {View, Text, Button, ScrollView, StyleSheet, TextInput, SafeAreaView, StatusBar} from 'react-native'
import CheckBox from 'expo-checkbox'
import {observer} from 'mobx-react-lite'
import uuid from 'react-native-uuid'
import Todo from "./store/Todo";

// оборачиваем компонент в observer для отслеживания изменений в сторе Mobx
const App = observer(() => {
    // создаем хух состояния для инпута
    const [text, setText] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TextInput style={{height: 40}} placeholder="Create" onChangeText={t => setText(t)} defaultValue={text}/>
                <Button title="Add Todo" onPress={() => Todo.createTodo({id: uuid.v4(), title: text})}/>
                {Todo.todos.map(({id, title, completed}) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            width: 350,
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                        key={id}
                    >
                        <CheckBox value={completed} onValueChange={() => Todo.completeTodo(id)}/>
                        <Text>{title}</Text>
                        <Button title="Delete" onPress={() => Todo.deleteTodo(id)}/>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight
    }
});

export default App
