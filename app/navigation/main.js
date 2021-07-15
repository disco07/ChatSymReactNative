import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from 'react';
import {Icon} from "react-native-elements";
import Messenger from "@screens/Messenger";
import Messages from "@screens/Messages";
import Settings from "@screens/Settings";

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name={"BottomTabNavigator"} component={BottomTabNavigator} />
            <MainStack.Screen name={"Messages"} component={Messages} />
        </MainStack.Navigator>
    );
};

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Messenger"
                             tabBarOptions={{
                                 showIcon: true,
                                 showLabel: true,
                                 style: {borderTopWidth: 1}
                             }}>
            <BottomTab.Screen name={"Messenger"}
                              component={Messenger}
                              options={{
                                  title: "Messages",
                                  tabBarBadge: 3,
                                  tabBarIcon: ({color}) => {
                                      return <Icon color={color} name="chatbubbles-outline" type='ionicon' size={20} solid />;
                                  },
                              }}/>
            <BottomTab.Screen name={"Settings"}
                              component={Settings}
                              options={{
                                  title: "Settings",
                                  tabBarIcon: ({color}) => {
                                      return <Icon color={color} name="cog-outline" type='ionicon' size={20} solid />;
                                  },
                              }}/>
        </BottomTab.Navigator>
    );
}

