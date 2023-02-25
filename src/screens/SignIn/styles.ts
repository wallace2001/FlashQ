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
        marginTop: 40,
    },
    input: {
        paddingVertical: 15,
        marginTop: 40,
        borderRadius: 20,
        backgroundColor: COLORS.blue_input,
        paddingHorizontal: 15,
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
        textAlign: 'center',
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
        color: COLORS.white
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});