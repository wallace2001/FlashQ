import { StyleSheet, Platform } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    form: {
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'ios' ? 15 : 0,
        borderRadius: 5,
        backgroundColor: "#fff",
        fontSize: 17,
    },
    submit: {
        width: 50,
        height: '100%',
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginLeft: 20,
        marginRight: 0,
    },
    icon: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
});