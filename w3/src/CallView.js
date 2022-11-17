import {Image, StyleSheet, Text, View} from "react-native";

const names = ['John Doe', 'Srick Tree', 'Clark Man', 'Mark Doe']
const images = [require('./../assets/a1.png'), require('./../assets/a2.png'), require('./../assets/a3.png'), require('./../assets/a4.png')]

export const CallView = (props) => {
    return (
        <View key={props.idx} style={styles.upperView}>
            <View style={styles.innerView}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: images[Math.floor(Math.random() * 4)],
                    }}
                />
                <View style={styles.name}>
                    <Text style={styles.burnText}>{names[Math.floor(Math.random() * 4)]}</Text>
                    <Text>✔ 5 October 2022</Text>
                </View>
            </View>
            <Image
                style={styles.callIcon}
                source={{
                    uri: Math.floor(Math.random() * 2) > 0 ? require('./../assets/callIcon.png') : require('./../assets/videoCall.png'),
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    upperView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 75,
        backgroundColor: 'white',
        marginBottom: 1,
        alignItems: "center",
        padding: 10
    },
    innerView: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    name: {
        flexDirection: "column"
    },
    burnText: {
        fontWeight: "bold"
    },
    tinyLogo: {
        backgroundColor: 'azure',
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50
    },
    callIcon: {
        width: 30,
        height: 30,
    }
});