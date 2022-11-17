import { Image, StyleSheet, Text, View } from "react-native";

export const ImageItem = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.color,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 10,
      paddingLeft: 10,
      width: 150,
      height: 150,
      marginRight: 15
    },
    view: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: '100%'
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text>{props.text}</Text>
      </View>
    </View>
  );
};
