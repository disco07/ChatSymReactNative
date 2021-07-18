import React from 'react';
import {FlatList, Image, Text, View} from "react-native";
import styles from "./styles"

function ListItem({data}) {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
            <View style={styles.container}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.detail}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>{item.firstName} {item.lastName}</Text>
                    </View>
                    <View>
                        <Text style={{opacity: 0.5}}>{item.message}</Text>
                    </View>
                </View>
                <View style={{flex: 0.3}}>
                    <Text style={{opacity: 0.5}}>{item.date}</Text>
                </View>
            </View>
        )} />
    );
}

export default ListItem;