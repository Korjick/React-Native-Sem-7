import {Pressable, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import colors from "react-native/Libraries/NewAppScreen/components/Colors";

const TodoScreen = ({route, navigation}) => {

    const {item, complete, newTodos, completeTodos, setCompleteTodos, setNewTodos} = route.params;
    const [isComplete, setIsComplete] = useState(complete);

    return (
        <SafeAreaView style={styles.container}>
            <Text>{item}</Text>
            <Pressable style={{marginVertical: 10}} onPress={() => {
                if(isComplete) {
                    completeTodos.splice(completeTodos.indexOf(item), 1)
                    let completeTodo = [...completeTodos]
                    setCompleteTodos(completeTodo)

                    let newTodo = [...newTodos]
                    newTodo.push(item)
                    setNewTodos(newTodo)
                } else {
                    newTodos.splice(newTodos.indexOf(item), 1)
                    let newTodo = [...newTodos]
                    setNewTodos(newTodo)

                    let completeTodo = [...completeTodos]
                    completeTodo.push(item)
                    setCompleteTodos(completeTodo)
                }
                setIsComplete(!isComplete)
            }}>
                <Text style={{color: isComplete ? 'red' : 'green', fontWeight:'bold'}}>{isComplete ? 'Back to incomplete' : 'Back to complete'}</Text>
            </Pressable>
            <Pressable style={{marginVertical: 10}} onPress={() => {
                if(isComplete) {
                    completeTodos.splice(completeTodos.indexOf(item), 1)
                    let completeTodo = [...completeTodos]
                    setCompleteTodos(completeTodo)
                } else {
                    newTodos.splice(newTodos.indexOf(item), 1)
                    let newTodo = [...newTodos]
                    setNewTodos(newTodo)
                }
                navigation.goBack()
            }}>
                <Text style={{color: 'red', fontWeight:'bold'}}>Delete</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TodoScreen;
