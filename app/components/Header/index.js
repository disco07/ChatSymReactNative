import React, {useEffect} from 'react';
import {StatusBar, Text, View} from "react-native";
import styles from "./styles";
import {Icon} from "react-native-elements";

function Header(props) {

    useEffect(() => {
        StatusBar.setBarStyle('dark-content', true);
    },[]);
    return (
        <View style={styles.container}>
            <View style={styles.contentLeft}>
                <Icon name="chevron-back-outline" type="ionicon" size={20} solid />
            </View>
        </View>
    );
}

export default Header;