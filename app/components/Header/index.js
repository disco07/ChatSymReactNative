import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

export default function Header(props) {
    const {
        stylesCenter,
        renderCenter = () => {},
        onPressLeft = () => {},
        onPressRight = () => {},
        stylesContentLeft,
        onPressRightSecond = () => {},
        renderLeft = () => {},
        renderRightSecond = () => {},
        renderRight = () => {}
    } = props;

    useEffect(() => {
        StatusBar.setBarStyle('dark-content', true);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <TouchableOpacity style={styles.contentLeft} onPress={onPressLeft}>
                        {renderLeft()}
                    </TouchableOpacity>
                </View>
                <View style={[styles.contentCenter, stylesCenter]}>>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                        {renderCenter()}
                    </Text>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity
                        style={[styles.contentRightSecond]}
                        onPress={onPressRightSecond}>
                        {renderRightSecond()}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.contentRight]}
                        onPress={onPressRight}>
                        {renderRight()}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}