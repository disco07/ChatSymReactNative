import React from 'react';
import {FlatList, Image, Text, View} from "react-native";
import styles from "./styles"

function UserAvatar({data}) {
    return (
        <FlatList
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <View>
                <View style={styles.container}>
                    <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.name}>
                    <Text>{item.name}</Text>
                </View>
                </View>
            )}/>
    );
}

export default UserAvatar;