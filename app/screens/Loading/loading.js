import React from 'react';
import {Image, View} from "react-native";
import styles from "./styles";
import {Images} from "@config";

const Loading = () => {
    return (
        <View style={[styles.container, {backgroundColor: "#161d31"}]}>
            <Image source={Images.logo} />
        </View>
    );
};

export default Loading;
