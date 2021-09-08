import React, {useState} from 'react';
import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform, SafeAreaView,
    ScrollView, Text,
    View
} from "react-native";
import styles from "./styles"
import SearchBar from "../../components/SearchBar";
import UserAvatar from "../../components/UserAvatar";
import ListItem from "../../components/ListItem";
import Header from "../../components/Header";
import {Icon} from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import {conversation} from "../../data/conversation";

function Messenger({navigation}) {
    const [search, setSearch] = useState("")
    const [data] = useState(conversation)

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