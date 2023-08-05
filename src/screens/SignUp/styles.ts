import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants/theme";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: COLORS.blue_background,
    },
    headerContent: {
        maxHeight: 140,
        marginTop: 10,
    },
    input: {
        paddingVertical: 15,
        marginTop: 30,
        borderRadius: 20,
        backgroundColor: COLORS.white,
        paddingHorizontal: 15,
        color: COLORS.white,
        shadowColor: '#828282',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    contentForgot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        margin: 8,
    },

    text: {
        ...FONTS.text,
    },
    textCheckbox: {
        color: COLORS.blue_100,
        fontSize: 15,
        maxWidth: '90%',
        fontFamily: 'Ubuntu_400Regular'
    },
    contentCheckbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        height: 50,
        backgroundColor: COLORS.pink_500,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    textButton: {
        fontSize: 20,
        color: COLORS.white,
        fontFamily: 'Ubuntu_400Regular'
    },
    divider: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    line: {
        width: '45%',
        height: 0.5,
        borderWidth: 0.5,
        borderColor: COLORS.blue_100
    },
    contentSocials: {
        marginTop: 30,
        paddingHorizontal: 70,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    strongText: {
        color: COLORS.pink_500,
        fontFamily: 'Ubuntu_400Regular'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});