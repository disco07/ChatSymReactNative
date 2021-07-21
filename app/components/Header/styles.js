import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 45,
    },
    contentLeft: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        width: 60,
    },
    contentCenter: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingRight: 20,
        height: '100%',
    },
})