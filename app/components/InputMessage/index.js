import React from 'react';
import styles from './styles';
import {KeyboardAvoidingView, Platform, TextInput, View} from "react-native";
import InputMessageIcon from "../inputMessageIcon";

const InputMessage = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.inputGroup}>
            <InputMessageIcon name={"add-circle"} />
            <InputMessageIcon name={"camera"} />
            <InputMessageIcon name={"image"} />
            <InputMessageIcon name={"mic"} />
            <View style={styles.input}>
                <View>
                    <TextInput placeholder={'Send a message...'} style={{fontSize: 18, opacity: 0.5, marginLeft: 10}}/>
                </View>
                <InputMessageIcon name={"happy"} />
            </View>
            <InputMessageIcon name={"thumbs-up"} />
        </KeyboardAvoidingView>
    );
};

export default InputMessage;