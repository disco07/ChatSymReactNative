import React from 'react';
import {SafeAreaView, TextInput, View} from "react-native";
import styles from "./styles";
import {Icon} from "react-native-elements";

function SearchBar({placeholder, onChangeText, value}) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Icon name={"search-outline"} type='ionicon' iconStyle={{opacity: 0.3}} size={20} solid/>
                </View>
                <View style={styles.textInput}>
                    <TextInput placeholder={placeholder}
                               style={{fontSize: 20, opacity: 0.5}}
                               value={value}
                               onChangeText={onChangeText}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SearchBar;