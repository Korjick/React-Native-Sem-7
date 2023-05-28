import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
  );
}

function SettingsScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
  );
}

function About() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About</Text>
        </View>
    );
}

export default function App() {
  return (
      <NavigationContainer>
          {/*<Tab.Navigator>*/}
          {/*    <Tab.Screen name="Home" component={HomeScreen}/>*/}
          {/*    <Tab.Screen name="Settings" component={SettingsScreen}/>*/}
          {/*    <Tab.Screen name="About" component={About}/>*/}
          {/*</Tab.Navigator>*/}
          <Drawer.Navigator initialRouteName="Menu">
              <Drawer.Screen name="Home" component={HomeScreen}/>
              <Drawer.Screen name="Settings" component={SettingsScreen}/>
              <Drawer.Screen name="About" component={About}/>
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
