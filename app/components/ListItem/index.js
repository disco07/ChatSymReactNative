import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles"

function ListItem({data, navigation}) {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate("Messages", {user: item.id})}>
                    <View style={styles.container}>
                        <Image source={item.image} style={styles.image}/>
                        <View style={styles.detail}>
                            <View>
                                <Text style={{fontWeight: 'bold', fontSize: 17}}>{item.firstName} {item.lastName}</Text>
                            </View>
                            <View>
                                <Text
                                    style={{opacity: 0.5}}>{item.message.length > 68 ? item.message.slice(0, 69) + "..." : item.message}</Text>
                            </View>
                        </View>
                        <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{opacity: 0.5}}>{item.date}</Text>
                            <View style={styles.badge}><Text>{item.id}</Text></View>
                        </View>
                    </View>
                </TouchableOpacity>
            )}/>
    );
}

export default ListItem;