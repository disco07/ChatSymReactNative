import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 75,
        width: "100%",
    },
    contentLeft: {
        flex: 1,
        justifyContent: 'center',
    },
    contentCenter: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    contentRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingRight: 20,
        height: '100%',
    },
    contentRightSecond: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingRight: 10,
        height: '100%',
    },
    right: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
})