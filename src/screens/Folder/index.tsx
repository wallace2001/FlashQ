import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import { IFolder, MobileContext } from "../../context/context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { BoxFolder } from "../../components/box-folder";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import useAddFolderModal from "../../hooks/use-add-modal";

export const Folder = () => {
    const [stringPath, setStringPath] = useState<string>('');
    const { folders, selectFolder, changeFolders, setPath, path } = useContext(MobileContext);
    const { onOpen } = useAddFolderModal();
    const navigation = useNavigation();

    const query = collection(db, path);
    const [docs, loading] = useCollectionData(query);

    const onSelectFolder = (folder: IFolder) => {
        selectFolder(folder);
    };

    const onBack = () => {
        if (path.split('/').length <= 4) {
            setPath('/FlashQ');
            navigation.navigate('Home');
        }

        const newPath = path.split('/').slice(0, -2);
        setPath(newPath.join('/'));
    };

    useEffect(() => {
        changeFolders(docs);
    }, [docs]);

    useEffect(() => {
        const arrayPath = path.replace(/\//g, ' / ').split('/');
        const pathFormated = arrayPath[arrayPath.length - 2];

        setStringPath(pathFormated);
    }, [path]);

    return (
        <View style={styles.container}>
            {/* <Header /> */}
            <View style={styles.contentHeader}>
                <TouchableOpacity onPress={onBack} style={styles.contentArrowBack}>
                    <FontAwesome5 name="arrow-left" size={20} color="black" />
                    <Text style={{ marginLeft: 10, fontSize: 17 }}>Voltar</Text>
                </TouchableOpacity>
                <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'flex-end' }} >
                    <Text style={{ fontSize: 20 }}>{stringPath}</Text>
                </View>
                <View style={{ flex: 1 }} />
            </View>
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
                    _.isEmpty(folders) ? (
                        <View style={styles.contentEmpty}>
                            <View style={styles.contentEmptyFolder}>
                                <Image
                                    source={require('../../../assets/emptyFolder.png')}
                                    resizeMode="cover"
                                    style={styles.image}
                                />
                                <Text style={{ fontSize: 20, marginLeft: 10 }}>Pasta vazia</Text>
                            </View>
                            <View style={styles.contentButtonNewArchive}>
                                <TouchableOpacity style={styles.button} onPress={onOpen}>
                                    <Entypo name="plus" size={30} color="#fff" />
                                    <Text style={{ color: '#fff', fontSize: 18, marginRight: 10, marginLeft: 10 }}>Criar novo arquivo</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <FlatList
                            data={folders}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <BoxFolder
                                        onSelectFolder={(folder) => onSelectFolder(folder)}
                                        folder={item}
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
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    contentHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 15
    },
    contentArrowBack: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        flex: 1
    },
    content: {
        width: '100%',
        maxHeight: '83%',
        marginTop: 20,
    },
    item: {
        backgroundColor: "#fff",
        borderRadius: 10,
        flexBasis: 0,
        marginHorizontal: 12,
        marginVertical: 4
    },
    contentEmptyFolder: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 40,
        height: 40
    },
    contentEmpty: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentButtonNewArchive: {
        marginTop: 20,
    },
    button: {
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#3f0072'
    },
});