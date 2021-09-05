import React from 'react';
import {Text, View} from "react-native";
import styles from './styles';

const Bubble = ({data}) => {
    console.log(data)
    return (
        <View style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-start'}}>
            <View>
                <Text style={[styles.name]}>{data[0].firstName}</Text>
                <View style={[styles.message]}>
                    <Text style={[styles.messageContent]}>{data[0].message}</Text>
                </View>
            </View>
        </View>
    );
};

export default Bubble;
