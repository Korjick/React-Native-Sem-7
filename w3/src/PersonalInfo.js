import {Image, StyleSheet, Text, View} from "react-native";

export const PersonalInfo = (props) => {
    const styles = StyleSheet.create({
        general: {
            flex: 1
        },
        upper: {
            flex: 1,
            backgroundColor: 'royalblue',
            justifyContent: 'center',
            alignItems: 'center'
        },
        lower: {
            flex: 3
        },
        imageView: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        callIcon: {
            backgroundColor: 'azure',
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: 'white',
            borderWidth: 5,
            marginBottom: 5
        },
        text: {
            color: 'white',
            fontWeight: 'bold'
        }
    });

    return (
        <View style={styles.general}>
            <View style={styles.upper}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.callIcon}
                        source={{
                            uri: require('./../assets/a1.png'),
                        }}
                    />
                    <Text style={styles.text}>John Doe</Text>
                </View>
            </View>
            <View style={styles.lower}>

            </View>
        </View>
    )
}