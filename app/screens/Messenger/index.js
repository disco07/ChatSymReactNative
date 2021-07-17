import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, View} from "react-native";
import styles from "./styles"
import SearchBar from "../../components/SearchBar";

function Messenger({navigation}) {
    const [search, setSearch] = useState("")
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search"
                onChangeText={(e) => setSearch(e)}
                value={search}
            />
        </View>
    );
}

export default Messenger;