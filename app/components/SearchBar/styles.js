import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        height: 35,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        borderRadius: 15,
        alignItems: "center"
    },
    icon: {
        flex: 0.1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    textInput: {
        flex: 1,
        height: 30,
        justifyContent: "center"
    }
})