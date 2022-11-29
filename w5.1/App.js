import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

const App = () => {
    const [pressedCount, setPressedCount] = useState(0);
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{margin: 16}}>
                {pressedCount > 0
                    ? `The button was pressed ${pressedCount} times!`
                    : 'The button isn\'t pressed yet'
                }
            </Text>
            <Button
                title='Press me'
                onPress={() => setPressedCount(pressedCount + 1)}
                disabled={pressedCount > 3}
            />
            <Button
                title='Reset press'
                onPress={() => setPressedCount(0)}
            />
        </View>
    );
};

export default App;
