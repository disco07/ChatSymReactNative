import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Loading from "@screens/Loading/loading";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import BottomTabNavigator from "./main";

const RootStack = createStackNavigator();

function AuthStack() {
    return (
        <RootStack.Navigator headerMode={"none"}>
            <RootStack.Screen name={"SignIn"} component={SignIn}/>
            <RootStack.Screen name={"SignUp"} component={SignUp}/>
        </RootStack.Navigator>
    )
}

export default function Navigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal"
                                 headerMode="none"
                                 initialRouteName="Loading">
                <RootStack.Screen name={"Loading"} component={Loading}/>
                <RootStack.Screen name={"Auth"} component={AuthStack}/>
                <RootStack.Screen name={"Main"} component={BottomTabNavigator}/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
};