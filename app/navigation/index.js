import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Loading from "@screens/Loading";
import SignIn from "@screens/SignIn";

const RootStack = createStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal"
                                 headerMode="none"
                                 initialRouteName="Loading">
                <RootStack.Screen name={"Loading"} component={Loading}/>
                <RootStack.Screen name={"SignIn"} component={SignIn}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
};