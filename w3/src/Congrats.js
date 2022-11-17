import {Button, Image, Pressable, StyleSheet, Text, View} from "react-native";
import * as url from "url";

export const Congrats = (props) => {
    const styles = StyleSheet.create({
        general: {
            flex: 1,
            backgroundColor: 'whitesmoke',
            justifyContent: "flex-start",
            alignItems: "center"
        },
        thumb: {
            marginTop: 30,
            width: 96,
            height: 96
        },
        tittle: {
            fontWeight: 'bold',
            fontSize: 32,
            color: 'lightslategrey',
            marginBottom: 30,
            textAlign: 'center'
        },
        text: {
            fontSize: 24,
            color: 'lightslategrey',
            textAlign: 'center',
            marginBottom: 30
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 20,
            elevation: 3,
            backgroundColor: 'dodgerblue',
            width: 200
        },
        buttonText: {
            color: 'white'
        }
    });

    return (
        <View style={styles.general}>
            <Image
                style={styles.thumb}
                source={{
                    uri: require('./../assets/thumbUp.png')
                }}
            />
            <Text style={styles.tittle}>Congratulations!</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    )
}