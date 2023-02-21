import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, TextInput, Platform, Pressable, Text } from "react-native";
import { FolderIcon } from "../../components/Folder";
import { collection } from "firebase/firestore"; 
import { db } from "../../config/firebaseConfig";
import { IPars, MobileContext } from "../../context/context";
import { useCollectionData } from "react-firebase-hooks/firestore";
import _ from "lodash";

export const Home = () => {

    const [description, setDescription] = useState('');

    const { createFolder, changeFolders, folders, path } = useContext(MobileContext);

    // Searching folders according to where you are now
    // TODO: Study better to try to improve this database call
    const query = collection(db, path);
    const [ docs ] = useCollectionData(query);

    const handleSubmit = () => {
        const pars: IPars = {
            text: description,
            type: 'folder',
            path: ''
        };

        createFolder(pars);
    };

    useEffect(() => {
        changeFolders(docs);
    }, [docs])

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    value={description}
                    placeholder="Enter new task description"
                    onChangeText={setDescription}
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.textInput}
                />
                <Pressable onPress={handleSubmit} style={styles.submit}>
                    <Text style={styles.icon}>＋</Text>
                </Pressable>
            </View>
            <View style={styles.content}>
                {_.map(folders, folder => {
                    return (
                        <FolderIcon key={folder.id} {...folder} />
                    );
                })}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    content: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 5,
        flexWrap: "wrap"
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
});