import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { IFolder, MobileContext } from "../../context/context";

export const FolderIcon = ({ folder }: { folder: IFolder }) => {

    const { selectFolder } = useContext(MobileContext);

    return (
        <TouchableOpacity onPress={() => selectFolder(folder)} style={styles.container}>
        <View style={styles.folder}>
            <Entypo name="folder" size={40} color="black" />
        </View>
        <View style={styles.contentName}>
            <Text style={styles.text}>{folder.text}</Text>
        </View>
        <View style={{ flex: 1 }} />
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    folder: {
        flex: 1,
        height: 60,
        justifyContent: 'center',
        borderRadius: 10,
    },
    contentName: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    text: {
        textAlign: 'center',
        color: '#000'
    },

});