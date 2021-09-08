import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from "react-native";
import styles from './styles';
import Header from "../../components/Header";
import {Icon} from "react-native-elements";
import InputMessage from "../../components/InputMessage";
import MessageItem from "../../components/MessageItem";
import messages from "../../data/messages";

function Messages({navigation}) {
    const [data] = useState(messages)
    return (
        <View style={styles.container}>
            <Header onPressLeft={() => navigation.goBack()}
                    renderLeft={() => <Text>
                        <Icon name={"arrow-back"} type='ionicon' size={30} solid/>
                    </Text>}
                    renderCenter={() => <>
                        <Image source={data.users[0].image}
                               style={{
                                   height: 50,
                                   width: 50,
                                   borderWidth: 1,
                                   borderColor: "#000",
                                   borderRadius: 50
                               }}/>
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 25,
                            paddingLeft: 10
                        }}>{data.users[0].firstName + " " + data.users[0].lastName}</Text>
                    </>}
                    renderRight={() => <Text>
                        <Icon name={"call"} type='ionicon' size={25} solid/>
                    </Text>}
                    renderRightSecond={() => <Text>
                        <Icon name={"videocam"} type='ionicon' size={25} solid/>
                    </Text>}/>
            <FlatList data={data.messages.sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt))}
                      style={{marginBottom: 10}}
                      keyExtractor={item => item.id}
                      inverted
                      renderItem={({item}) => (
                          <MessageItem data={item}/>
                      )}/>
            <InputMessage />
        </View>
    );
}

export default Messages;