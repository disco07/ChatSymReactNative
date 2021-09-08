import React from 'react';
import {Text, View} from "react-native";
import styles from "./styles"

const MessageItem = ({data}) => {
    const MyID = 1
    return (
        <View style={{display: 'flex', flexDirection: data.user.id === MyID ? 'row-reverse': 'row', justifyContent: 'flex-start'}}>
            <View>
                <Text style={[styles.name]}>{data.user.id !== MyID ? data.user.firstName: ''}</Text>
                <View style={[styles.message, {backgroundColor: data.user.id === MyID ? '#4898ff': '#f1f1f2'}]}>
                    <Text style={[styles.messageContent]}>{data.content}</Text>
                </View>
            </View>
        </View>
    );
};

export default MessageItem;
