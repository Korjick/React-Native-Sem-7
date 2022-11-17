import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {CustomList} from "./src/CustomList";
import {WhiteImageTextView} from "./src/WhiteImageTextView";
import {CallView} from "./src/CallView";
import {PersonalInfo} from "./src/PersonalInfo";
import {Congrats} from "./src/Congrats";

/* Uncomment */

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>

                {/*<CustomList*/}
                {/*    innerViewAction={(i) => <WhiteImageTextView idx={i} imageUrl={'https://reactnative.dev/img/tiny_logo.png'} />}*/}
                {/*    innerCount={10}*/}
                {/*    backColor={'whitesmoke'} />*/}

                {/*<CustomList*/}
                {/*    innerViewAction={(i) => <CallView idx={i}/>}*/}
                {/*    innerCount={10}*/}
                {/*    backColor={'whitesmoke'}/>*/}

                {/*<PersonalInfo />*/}

                <Congrats />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
});
