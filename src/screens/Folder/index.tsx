import { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { IFolder, MobileContext } from "../../context/context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { BoxFolder } from "../../components/box-folder";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import _ from "lodash";
import { styles } from "./styles";
import { getFolders } from "../../actions/folder";
import { EmptyFolder } from "../../components/empty-folder";
import { IArchive } from "../../types";

export const Folder = () => {
    const [stringPath, setStringPath] = useState<string>('');

    const { archives, selectFolder, changeFolders, setPath, path } = useContext(MobileContext);

    const navigation = useNavigation();

    const { docs, loading } = getFolders(path);

    const onSelectFolder = (archive: IArchive) => {
        selectFolder(archive);
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
                    _.isEmpty(archives) ? (<EmptyFolder />) : (
                        <FlatList
                            data={archives}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <BoxFolder
                                        onSelectFolder={(archive) => onSelectFolder(archive)}
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
    );
};