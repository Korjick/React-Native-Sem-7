import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ImageItem } from "./src/ImageItem";
import { SafeAreaView } from 'react-native-safe-area-context'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Привет мир</Text>
      <ScrollView horizontal={true}>
        <ImageItem color="red" text="Test1" />
        <ImageItem color="yellow" text="Test2" />
        <ImageItem color="green" text="Test3" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
