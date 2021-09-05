import React, {useState} from 'react';
import {Image, ScrollView, Text, TextInput, View} from "react-native";
import styles from './styles';
import {Images} from "@config";
import Header from "../../components/Header";
import {Icon} from "react-native-elements";
import Bubble from "../../components/Bubble";

function Messages({navigation}) {
    const [data] = useState([
        {
            id: "11",
            firstName: "Rokia",
            lastName: "Koné",
            date: "11:05",
            message: "Bonjour mon fils ca va ? Ca fait longtemps",
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
    return (
        <View style={styles.container}>
            <Header onPressLeft={() => navigation.goBack()}
                    renderLeft={() => <Text>
                        <Icon name={"arrow-back"} type='ionicon' size={30} solid/>
                    </Text>}
                    renderCenter={() => <>
                        <Image source={data[0].image}
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
                        }}>{data[0].firstName + " " + data[0].lastName}</Text>
                    </>}
                    renderRight={() => <Text>
                        <Icon name={"call"} type='ionicon' size={25} solid/>
                    </Text>}
                    renderRightSecond={() => <Text>
                        <Icon name={"videocam"} type='ionicon' size={25} solid/>
                    </Text>}/>

            <ScrollView style={[styles.container]}>
                <Bubble data={data}/>
                <Bubble data={data} me={'me'}/>
            </ScrollView>
            <View style={styles.inputGroup}>
                <View style={{marginRight: 8}}>
                    <Icon name={"add-circle"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
                </View>
                <View style={{marginRight: 8}}>
                    <Icon name={"camera"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
                </View>
                <View style={{marginRight: 8}}>
                    <Icon name={"image"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
                </View>
                <View style={{marginRight: 8}}>
                    <Icon name={"mic"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
                </View>
                <View style={[styles.inputGroup, {borderWidth: 1, borderRadius: 30}]}>
                    <View>
                        <TextInput placeholder={'Send a message...'} style={{fontSize: 18, opacity: 0.5, marginLeft: 10}}/>
                    </View>
                    <View>
                        <Icon name={"happy"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
                    </View>
                </View>
                <View style={{marginRight: 8}}>
                    <Icon name={"thumbs-up"} type='ionicon' iconStyle={{color: '#4898ff'}} size={30} solid/>
                </View>
            </View>
        </View>
    );
}

export default Messages;