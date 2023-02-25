import { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Pressable, FlatList } from "react-native";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Entypo } from '@expo/vector-icons';
import _ from "lodash";

import { FolderIcon } from "../../components/Folder";
import { db } from "../../config/firebaseConfig";
import { IPars, MobileContext } from "../../context/context";
import { homeStyles as styles } from "./styles";
import { Header } from "../../components/Header";

export const Home = () => {

    const [description, setDescription] = useState('');

    const { createFolder, changeFolders, folders, path } = useContext(MobileContext);

    // Searching folders according to where you are now
    // TODO: Study better to try to improve this database call
    const query = collection(db, path);
    const [docs] = useCollectionData(query);

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
            <Header />
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
        </View>
    );
};