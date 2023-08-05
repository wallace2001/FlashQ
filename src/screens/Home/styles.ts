import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../../constants/theme";

export const homeStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    containerContent: {
        width: '100%',
        height: '70%',
        position: 'relative',
        marginTop: 70,
    },
    content: {
        width: '100%',
        maxHeight: '83%',
        padding: 16,
        marginTop: 70,
    },
    item: {
        margin: 4,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flexBasis: 0,
    },
    optionsFlatList: {
        paddingHorizontal: 20,
        paddingTop: 20,
        position: 'absolute',
        zIndex: 999,
        top: -80,
      },
    icon: {
        color: "#000",
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
});