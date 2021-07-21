import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

function Header({title, onPressLeft, onPressRight, onPressRightSecond, renderLeft, renderRightSecond, renderRight}) {

    useEffect(() => {
        StatusBar.setBarStyle('dark-content', true);
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <TouchableOpacity style={styles.contentLeft} onPress={onPressLeft}>
                        {renderLeft()}
                    </TouchableOpacity>
                </View>
                <View style={[styles.contentCenter]}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                        {title}
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

export default Header;
