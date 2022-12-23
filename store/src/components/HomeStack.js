import Description from "./Description";
import Home from "./Home";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Description" component={Description} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

export default HomeStack;
