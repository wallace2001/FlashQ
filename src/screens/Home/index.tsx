import { useState, useEffect, useContext } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import _ from "lodash";

import { MobileContext } from "../../context/context";
import { homeStyles as styles } from "./styles";
import { Header } from "../../components/Header";
import { OPTIONS_BREED } from "../../../constants/home";
import { BoxSelect } from "../../components/box-select";
import { BoxFolder } from "../../components/box-folder";
import { useNavigation } from "@react-navigation/native";
import { getFolders } from "../../actions/folder";
import { EmptyFolder } from "../../components/empty-folder";
import { IArchive } from "../../types";
import { ModalAddArchive } from "../../components/ModalForm";

export const Home = () => {
    const [itemSelected, setitemSelected] = useState<string>("archives");

    const { changeFolders, selectFolder, archives, path } = useContext(MobileContext);
    const navigation = useNavigation();

    const { docs, loading } = getFolders(path);

    const onSelectFolder = (archive: IArchive) => {
        selectFolder(archive);
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
                        _.isEmpty(archives) ? (
                            <EmptyFolder />
                        ) : (
                            <FlatList
                                data={archives}
                                renderItem={({ item }) => (
                                    <View style={styles.item}>
                                        <BoxFolder
                                            onSelectFolder={(archive: IArchive) => onSelectFolder(archive)}
                                            archive={item}
                                            quantityArchives={2}
                                            key={item.text}
                                        />
                                    </View>
                                )}
                                showsVerticalScrollIndicator={false}
                            />
                        )
                    )}
                </View>
            </View>
        </View>
    );
};