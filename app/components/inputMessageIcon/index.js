import React from 'react';
import {Icon} from "react-native-elements";
import {View} from "react-native";

const InputMessageIcon = ({name}) => {
    return (
        <View style={{marginRight: 8}}>
            <Icon name={name} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
        </View>
    );
};

export default InputMessageIcon;
