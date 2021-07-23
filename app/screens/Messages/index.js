import React, {useState} from 'react';
import {Image, Text, View} from "react-native";
import Header from "../../components/Header";
import styles from "./styles"
import {Icon} from "react-native-elements";
import {Images} from "../../config";

function Messages({navigation}) {

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
            <Header renderCenter={
                () => (
                    <>
                        <View>
                            <Image source={data[2].image}
                                   style={{
                                       height: 40,
                                       width: 40,
                                       borderWidth: 1,
                                       borderColor: "#000",
                                       borderRadius: 50
                                   }}/>
                        </View>
                        <View>
                            <Text>{data[2].firstName}</Text>
                        </View>
                    </>
                )
            }
                    onPressLeft={() => navigation.goBack()}
                    stylesContentLeft={{paddingHorizontal: 10}}
                    renderLeft={() => {
                        return (
                            <Image source={Images.leftArrow}
                                   style={{height: 25, width: 25}}/>
                        )
                    }} renderRight={() => {
                return <Icon color={"#000"}
                             name="create-outline"
                             type='ionicon'
                             size={30}
                             backgroundColor={'#F5F5F5'}
                             borderRadius={30}
                             solid/>;
            }} renderRightSecond={() => {
                return <Icon color={"#000"}
                             name="camera"
                             type='ionicon'
                             size={30}
                             backgroundColor={'#F5F5F5'}
                             borderRadius={30}
                             solid/>
            }}/>
        </View>
    );
}

export default Messages;