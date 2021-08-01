import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, TouchableWithoutFeedback, View} from "react-native";
import styles from "./styles";

export default function Header(props) {
    const {
        stylesCenter,
        renderCenter = () => {
        },
        onPressLeft,
        onPressRight,
        stylesContentLeft,
        onPressRightSecond,
        renderLeft = () => {
        },
        renderRightSecond = () => {
        },
        renderRight = () => {
        },
    } = props;

    useEffect(() => {
        StatusBar.setBarStyle('dark-content', true);
        console.log(StatusBar.currentHeight)
    }, []);

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPressLeft}>
                <View style={[styles.contentLeft, stylesContentLeft]}>
                    {renderLeft()}
                </View>
            </TouchableWithoutFeedback>
            <View style={[styles.contentCenter, {flex: 5, justifyContent: "flex-start"}]}>
                {renderCenter()}
            </View>
            <View style={styles.right}>
                <TouchableWithoutFeedback onPress={onPressRight}>
                    <View style={styles.contentRight}>
                        {renderRight()}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPressRightSecond}>
                    <View style={styles.contentRightSecond}>
                        {renderRightSecond()}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}