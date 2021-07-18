import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from "react-native";
import styles from "./styles"
import SearchBar from "../../components/SearchBar";
import UserAvatar from "../../components/UserAvatar";
import {Images} from "@config";

function Messenger({navigation}) {
    const [search, setSearch] = useState("")
    const [data] = useState([
        {id: "1", name: "Yarie", image: Images.avatarFemale1},
        {id: "2", name: "Sona", image: Images.avatarFemale2},
        {id: "3", name: "Drissa", image: Images.avatarMale4},
        {id: "5", name: "Apolline", image: Images.avatarFemale5},
        {id: "6", name: "Bambo", image: Images.avatarFemale6},
        {id: "7", name: "Yacouba", image: Images.avatarMale1},
        {id: "8", name: "Yaya", image: Images.avatarMale2},
    ])
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                                  style={{flex: 1}}>
                <SearchBar
                    placeholder="Search"
                    onChangeText={(e) => setSearch(e)}
                    value={search}
                />
                <View>
                    <UserAvatar data={data} />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default Messenger;