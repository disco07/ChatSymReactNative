import React from 'react';
import styles from "../../screens/Messages/styles";
import {Icon} from "react-native-elements";
import {TextInput, View} from "react-native";

const InputMessage = () => {
    return (
        <View style={styles.inputGroup}>
            <View style={{marginRight: 8}}>
                <Icon name={"add-circle"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
            </View>
            <View style={{marginRight: 8}}>
                <Icon name={"camera"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
            </View>
            <View style={{marginRight: 8}}>
                <Icon name={"image"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
            </View>
            <View style={{marginRight: 8}}>
                <Icon name={"mic"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f1f1f2', borderWidth: 1, borderRadius: 30}}>
                <View>
                    <TextInput placeholder={'Send a message...'} style={{fontSize: 18, opacity: 0.5, marginLeft: 10}}/>
                </View>
                <View>
                    <Icon name={"happy"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
                </View>
            </View>
            <View style={{marginLeft: 10}}>
                <Icon name={"thumbs-up"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
            </View>
        </View>
    );
};

export default InputMessage;
