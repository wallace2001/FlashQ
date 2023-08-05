import { StyleSheet } from "react-native";
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