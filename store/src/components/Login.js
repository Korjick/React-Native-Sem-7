import React from "react";
import {SafeAreaView, Text, View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})

const Login = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View>
                <Text>Login</Text>
            </View>
        </SafeAreaView>
    )
}

export default Login;
