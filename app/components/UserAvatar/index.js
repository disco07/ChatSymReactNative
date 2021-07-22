import React from 'react';
import {FlatList, Image, ScrollView, Text, TouchableWithoutFeedback, View} from "react-native";
import styles from "./styles"
import {Icon} from "react-native-elements";

function UserAvatar({data, user}) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: "row"}}>
                <TouchableWithoutFeedback onPress={() => alert('hello')}>
                    <View>
                        <View style={[styles.containerImage, {borderWidth: 2, borderColor: 'lightgrey',}]}>
                            <Image source={user}
                                   style={[styles.image, {borderWidth: 2, borderColor: "white",}]}/>
                        </View>
                        <View style={styles.Icon}>
                            <Icon backgroundColor='#fff' borderRadius="50" name="add-circle" type='ionicon' size={30}
                                  solid/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index}>
                                <View style={[styles.container, {borderWidth: 2, borderColor: 'red',}]}>
                                    <Image source={item.image}
                                           style={[styles.image, {borderWidth: 2, borderColor: "white",}]}/>
                                </View>
                                <View style={styles.name}>
                                    <Text>{item.firstName}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

export default UserAvatar;