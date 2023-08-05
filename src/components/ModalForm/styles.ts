import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../../constants/theme";

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#f7f7f7',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 20,
    },
    contentButtons: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    box: {
        position: 'relative',
        top: -100
    },
    contentButton: {
        flex: 1,
    },
    form: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentTextInput: {
        width: '100%', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        marginBottom: 5
    },
    contentAddFolderButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a2194',
        borderRadius: 20,
        marginTop: 40
    },
    textInput: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'ios' ? 15 : 0,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        fontSize: 17,
        shadowColor: '#828282',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    buttonCreate: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        shadowColor: '#b1b1b1',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    contentView: {
        justifyContent: 'center',
        margin: 0,
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    text: {
        textAlign: 'center',
    },
});

const dinamicStyledButton = (type: 'folder' | 'card') => { 

    const defaultStylesCard = {
        ...styles.buttonCreate,
        borderTopRightRadius: 20,
        backgroundColor: COLORS.white
    };
    const defaultStylesFolder = {
        ...styles.buttonCreate,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 0,
        backgroundColor: COLORS.white
    };
    const defaultStylesTextCard = {
        ...styles.text,
        color: '#000',
    };
    const defaultStylesTextFolder = {
        ...styles.text,
        color: '#000',
    };

    if (type === 'folder') {
        defaultStylesFolder.backgroundColor = '#3f0072';
        defaultStylesTextFolder.color = COLORS.white;
    } else if (type === 'card') {
        defaultStylesCard.backgroundColor = '#3f0072';
        defaultStylesTextCard.color = COLORS.white;
    }

    return {
        styledCard: defaultStylesCard,
        styledFolder: defaultStylesFolder,
        styledTextCard: defaultStylesTextCard,
        styledTextFolder: defaultStylesTextFolder
    };
};

export {
    styles,
    dinamicStyledButton
}