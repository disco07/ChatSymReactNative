import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles"

function ListItem({data, navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Messages", {user: data.id})}>
            <View style={styles.container}>
                <Image source={data.image} style={styles.image}/>
                <View style={styles.detail}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>{data.firstName} {data.lastName}</Text>
                    </View>
                    <View>
                        <Text
                            style={{opacity: 0.5}}>{data.message.length > 68 ? data.message.slice(0, 69) + "..." : data.message}</Text>
                    </View>
                </View>
                <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{opacity: 0.5}}>{data.date}</Text>
                    <View style={styles.badge}><Text>{data.id}</Text></View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ListItem;