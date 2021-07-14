import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from 'react';

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name={"BottomTabNavigator"} component={BottomTabNavigator} />
        </MainStack.Navigator>
    );
};

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Messenger"
                             headerMode="none"
                             tabBarOptions={{
                                 showIcon: true,
                                 showLabel: true,
                                 style: {borderTopWidth: 1}
                             }}>
            <BottomTab.Screen name={"Messenger"} />
        </BottomTab.Navigator>
    );
}

