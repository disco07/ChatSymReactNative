import React, {useState} from 'react';
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    View
} from "react-native";
import styles from "./styles"
import SearchBar from "../../components/SearchBar";
import UserAvatar from "../../components/UserAvatar";
import {Images} from "@config";
import ListItem from "../../components/ListItem";
import Header from "../../components/Header";
import {Icon} from "react-native-elements";

function Messenger({navigation}) {
    const [search, setSearch] = useState("")
    const [data] = useState([
        {
            id: "1",
            firstName: "Yarie",
            lastName: "Sylla",
            date: "10:45",
            message: "Bonjour mon bébé ca va ?Bonjour mon bébé ca va ?Bonjour mon bébé ca va ?Bonjour mon bébé ca va ?Bonjour mon bébé ca va ?Bonjour mon bébé ca va ?",
            image: Images.avatarFemale1
        },
        {
            id: "2",
            firstName: "Sona",
            lastName: "Sylla",
            date: "11:25",
            message: "Bonjour Sona ca va ?",
            image: Images.avatarFemale2
        },
        {
            id: "3",
            firstName: "Drissa",
            lastName: "Koné",
            date: "15:50",
            message: "Bonjour Moi ca va ?",
            image: Images.avatarMale4
        },
        {
            id: "5",
            firstName: "Apolline",
            lastName: "Quimbert",
            date: "18:35",
            message: "Bonjour Apo ca va ?",
            image: Images.avatarFemale5
        },
        {
            id: "6",
            firstName: "Bambo",
            lastName: "Sanogo",
            date: "09:49",
            message: "Bonjour Bambo ca va ?",
            image: Images.avatarFemale6
        },
        {
            id: "7",
            firstName: "Yacouba",
            lastName: "Koné",
            date: "07:45",
            message: "Bonjour Yacouba ca va ?",
            image: Images.avatarMale1
        },
        {
            id: "8",
            firstName: "Yaya",
            lastName: "Koné",
            date: "18:58",
            message: "Bonjour Yaya ca va ?",
            image: Images.avatarMale2
        },
        {
            id: "9",
            firstName: "Tiemoko",
            lastName: "Koné",
            date: "08:18",
            message: "Bonjour ca va ?",
            image: Images.avatarMale3
        },
    ])
    return (
        <View style={styles.container}>
            
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                                  style={{flex: 1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchBar
                        placeholder="Search"
                        onChangeText={(e) => setSearch(e)}
                        value={search}/>
                    <UserAvatar data={data} user={data[2].image}/>
                    <View style={{marginTop: 10}}>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => (
                                <ListItem data={item} navigation={navigation}/>
                            )}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

export default Messenger;