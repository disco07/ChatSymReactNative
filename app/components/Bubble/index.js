import React from 'react';
import {Text, View} from "react-native";
import styles from './styles';

const Bubble = ({data, me}) => {
    return (
        <View style={{display: 'flex', flexDirection: me ? 'row-reverse': 'row', justifyContent: 'flex-start'}}>
            <View>
                <Text style={[styles.name]}>{!me ? data[0].firstName: ''}</Text>
                <View style={[styles.message, {backgroundColor: me ? '#4898ff': '#f1f1f2'}]}>
                    <Text style={[styles.messageContent]}>{data[0].message}</Text>
                </View>
            </View>
        </View>
    );
};

export default Bubble;
