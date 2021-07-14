import React from 'react';
import {Text, View} from "react-native";

const signIn = () => {
    return (
        <View style={{flex: 1}}>
            <View>
                <Text style={{fontWeight: 900}}>Welcome,</Text>
                <Text>Sign in to continue!</Text>
            </View>
        </View>
    );
};

export default signIn;
