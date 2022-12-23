import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Cart from "./Cart";
import HomeStack from "./HomeStack";
import Favourites from "./Favourites";

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Products"
            activeColor="blue"
            inactiveColor="gray"
            barStyle={{backgroundColor: 'white'}}
            shifting={true}
        >
            <Tab.Screen
                name="Products"
                component={HomeStack}
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <Ionicons name="home" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="cart" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({color}) => (
                        <Ionicons name="heart" color={color} size={26}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;
