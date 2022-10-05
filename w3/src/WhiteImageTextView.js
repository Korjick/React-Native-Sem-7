import {Image, StyleSheet, Text, View} from "react-native";

export const WhiteImageTextView = (props) => {
    return (
        <View key={props.idx} style={styles.innerView} >
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: props.imageUrl,
                }}
            />
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    innerView: {
        height: 75,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginRight: 10
    }
});