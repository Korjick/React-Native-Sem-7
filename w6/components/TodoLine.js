import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const TodoLine = (props) => {
    return (
        <View style={styles.todoLine}>
            <Pressable style={styles.todoLineTouch} onPress={() => {
                props.navigation.navigate('Todo',
                    {
                        item: props.item,
                        complete: props.complete,
                        newTodos: props.newTodos,
                        completeTodos: props.completeTodos,
                        setCompleteTodos: props.setCompleteTodos,
                        setNewTodos: props.setNewTodos,
                    })
            }}>
                <Text style={{flex: 3}}>{props.item}</Text>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <AntDesign name="rightcircleo" size={24} color="black"/>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    todoLine: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: 350,
        height: 50,
        marginVertical: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    todoLineTouch: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
})

export default TodoLine;
