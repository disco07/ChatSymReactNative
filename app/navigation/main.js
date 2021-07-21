import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from 'react';
import {Icon} from "react-native-elements";
import Messenger from "@screens/Messenger";
import Messages from "@screens/Messages";
import Settings from "@screens/Settings";
import Profile from "@screens/Profile";
import {Text} from "react-native";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function MessengerStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name={"Messenger"} component={Messenger} />
            <Stack.Screen name={"Messages"} component={Messages} />
        </Stack.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Profile"} component={Profile} />
        </Stack.Navigator>
    );
}

function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Settings"} component={Settings} />
        </Stack.Navigator>
    );
}

export default function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Messenger"
                             screenOptions={({route}) => ({
                                 headerTitle: () => <Text>Header</Text>,
                                 tabBarIcon: ({focused, color, size}) => {
                                     let icon;
                                     if (route.name === "Messenger") {
                                         icon = focused ? "chatbubbles" : "chatbubbles-outline"
                                     } else if (route.name === "Settings") {
                                         icon = focused ? "cog" : "cog-outline"
                                     } else if (route.name === "Profile") {
                                         icon = focused ? "person-circle" : "person-circle-outline"
                                     }
                                     return <Icon color={color} name={icon} type='ionicon' size={size} solid />;
                                 }
                             })}>
            <BottomTab.Screen name={"Messenger"} component={MessengerStack}/>
            <BottomTab.Screen name={"Settings"} component={SettingsStack}/>
            <BottomTab.Screen name={"Profile"} component={ProfileStack}/>
        </BottomTab.Navigator>
    );
}

