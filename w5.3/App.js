import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Dropdown from "./Dropdown";

const App = () => {

    const [boxes, setBoxes] = useState([<Box color='red' size={100}></Box>,
        <Box color='green' size={100}></Box>,
        <Box color='blue' size={100}></Box>]);

    const [size, setSize] = useState(0);

    const data = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ];
    const [selected, setSelected] = useState(data[0]);

    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                flexDirection: 'row'
            }}>
                {boxes}
            </View>
            <TextInput
                style={{padding: 8, backgroundColor: '#f5f5f5', marginVertical: 10}}
                onChangeText={text => setSize(parseInt(text))}
            />
            <Dropdown label="Select Item" data={data} onSelect={setSelected}/>
            <Button title={'Add'} onPress={() => {
                let newBoxes = [...boxes]
                newBoxes.push(<Box color={selected.value} size={size}></Box>)
                setBoxes(newBoxes)
            }}/>
        </View>
    );
};

export default App;

export const Box = (props) => (
    <View style={{
        width: props.size, height: props.size, backgroundColor:
        props.color
    }}/>
);
