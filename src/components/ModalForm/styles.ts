import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants/theme";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    content: {
        width: 200,
        height: 150,
        borderRadius: 20,
        left: (width / 2.2) - 100,
        bottom: 0,
    },
    contentButtons: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        paddingVertical: 10,
    },
    contentButton: {
        
    },
    buttonCreate: {
        width: 200,
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
        borderRadius: 5,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    contentView: {
        position: 'absolute',
        bottom: 120,
        left: 0
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
        backgroundColor: COLORS.white
    };
    const defaultStylesFolder = {
        ...styles.buttonCreate,
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
        defaultStylesFolder.backgroundColor = '#fff';
        defaultStylesTextFolder.color = COLORS.black;
    } else if (type === 'card') {
        defaultStylesCard.backgroundColor = '#fff';
        defaultStylesTextCard.color = COLORS.black;
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