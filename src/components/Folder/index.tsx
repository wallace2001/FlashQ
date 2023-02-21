import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { IFolder, MobileContext } from "../../context/context";

export const FolderIcon = (folder: IFolder) => {

    const { selectFolder } = useContext(MobileContext);

    return (
        <TouchableOpacity onPress={() => selectFolder(folder)} style={styles.container}>
            <View style={styles.folder}>
                <Entypo name="folder" size={24} color="white" />
            </View>
            <Text style={styles.text}>{folder.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    folder: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#9bfcf7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 8,
    },
});