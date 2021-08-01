import React, {useState} from 'react';
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform, SafeAreaView,
    ScrollView, Text,
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
import {StatusBar} from "expo-status-bar";

function Messenger({navigation}) {
    const [search, setSearch] = useState("")
    const [data] = useState([
        {
            id: "11",
            firstName: "Rokia",
            lastName: "Koné",
            date: "11:05",
            message: "Bonjour mon fils ca va ?",
            image: Images.avatarFemale3
        },
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

    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

    return (
        <SafeAreaView style={{flex: 1, marginTop: STATUSBAR_HEIGHT}}>
            <View style={[styles.container]}>
                <Header stylesContentLeft={{paddingHorizontal: 20}}
                        renderLeft={() => <Image source={data[3].image}
                                                 style={{
                                                     height: 50,
                                                     width: 50,
                                                     borderWidth: 1,
                                                     borderColor: "#000",
                                                     borderRadius: 50
                                                 }}/>}
                        renderCenter={() => <Text style={{fontWeight: "700", fontSize: 25}}>Chats</Text>}
                        renderRight={() => <Text>
                            <Icon name={"camera"} type='ionicon' size={25} solid/>
                        </Text>}
                        renderRightSecond={() => <Text>
                            <Icon name={"person-add"} type='ionicon' size={25} solid/>
                        </Text>}/>
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
        </SafeAreaView>
    );
}

export default Messenger;