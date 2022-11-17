import React, {useEffect, useState} from 'react' ;
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TodoScreen from "./screens/TodoScreen";


const App = () =>  {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Todo" component={TodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
