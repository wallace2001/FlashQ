import { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { IFolder, MobileContext } from "../../context/context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { BoxFolder } from "../../components/box-folder";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import useAddFolderModal from "../../hooks/use-add-modal";
import { styles } from "./styles";
import { getFolders } from "../../actions/folder";
import { COLORS } from "../../../constants/theme";

export const Folder = () => {
    const [stringPath, setStringPath] = useState<string>('');

    const { folders, selectFolder, changeFolders, setPath, path } = useContext(MobileContext);

    const { onOpen } = useAddFolderModal();
    const navigation = useNavigation();

    const { docs, loading } = getFolders(path);

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
                <View style={styles.viewContentArrow}>
                    <TouchableOpacity onPress={onBack} style={styles.contentArrowBack}>
                        <FontAwesome5 name="arrow-left" size={20} color="black" />
                        <Text style={{ marginLeft: 10, fontSize: 17 }}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>{stringPath}</Text>
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
                                    <Entypo name="plus" size={30} color={COLORS.white} />
                                    <Text style={{ color: COLORS.white, fontSize: 18, marginRight: 10, marginLeft: 10 }}>Criar novo arquivo</Text>
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