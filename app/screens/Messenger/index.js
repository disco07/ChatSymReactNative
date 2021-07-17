import React from 'react';
import {Button, Text, View} from "react-native";

function Messenger({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
            <Text>Messenger</Text>
            <Button title={"message"} onPress={() => navigation.push('Messages')} />
        </View>
    );
}

export default Messenger;