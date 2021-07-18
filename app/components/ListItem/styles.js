import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        height: 70,
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    detail: {
        flexDirection: "column",
        paddingLeft: 5,
    }
})