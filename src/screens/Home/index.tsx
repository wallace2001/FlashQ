import { useState, useEffect, useContext } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import _ from "lodash";

import { db } from "../../config/firebaseConfig";
import { IFolder, IPars, MobileContext } from "../../context/context";
import { homeStyles as styles } from "./styles";
import { Header } from "../../components/Header";
import { OPTIONS_BREED } from "../../../constants/home";
import { BoxSelect } from "../../components/box-select";
import { BoxFolder } from "../../components/box-folder";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
    const [itemSelected, setitemSelected] = useState<string>("archives");

    const { changeFolders, selectFolder, folders, path } = useContext(MobileContext);
    const navigation = useNavigation();

    const query = collection(db, path);
    const [docs, loading] = useCollectionData(query);

    const onSelectFolder = (folder: IFolder) => {
        selectFolder(folder);
        navigation.navigate('Folder');
    };

    useEffect(() => {
        changeFolders(docs);
    }, [docs]);

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerContent}>
                <FlatList
                    data={OPTIONS_BREED}
                    renderItem={({ item, index }) => (
                        <BoxSelect
                            setitemSelected={setitemSelected}
                            itemSelected={itemSelected}
                            item={item}
                            lastItem={OPTIONS_BREED.length - 1 === index}
                        />
                    )}
                    style={styles.optionsFlatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
                <View style={styles.content}>
                    {loading ? (
                        <View style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ActivityIndicator size="large" />
                        </View>
                    ) : (
                        <FlatList
                        data={folders}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <BoxFolder
                                    onSelectFolder={(folder: IFolder) => onSelectFolder(folder)}
                                    folder={item}
                                    quantityArchives={2}
                                    key={item.text}
                                />
                            </View>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                    )}
                </View>
            </View>
        </View>
    );
};