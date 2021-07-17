import React, {useEffect} from 'react';
import {ActivityIndicator, Image, Text, View} from "react-native";
import styles from "./styles";
import {Images} from "@config";

const Loading = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Auth");
        }, 500)
    }, [])
    return (
        <View style={[styles.container, {backgroundColor: "#ffd"}]}>
            <Image source={Images.logo} style={styles.logo} />
            <View>
                <Text>Messenger</Text>
            </View>
            <ActivityIndicator
                size="large"
                color="#000"
                style={{
                    marginTop: 20,
                }}
            />
        </View>
    );
};

export default Loading;
