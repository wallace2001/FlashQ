import { Text, View } from "react-native";
import { useState, useContext } from "react";
import Modal from "react-native-modal";
import useAddFolderModal from "../../hooks/use-add-modal";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { dinamicStyledButton, styles } from "./styles";
import { IPars, MobileContext } from "../../context/context";
import { Entypo } from "@expo/vector-icons";
import { createFolder } from "../../actions/folder";
import { COLORS } from "../../../constants/theme";

const FormNewFolder = () => {
    const [description, setDescription] = useState<string>('');
    const { onClose } = useAddFolderModal();

    const { path } = useContext(MobileContext);

    const handleSubmit = () => {
        const pars: IPars = {
            text: description,
            type: 'folder',
            path: ''
        };

        createFolder(pars, path);
        onClose();
    };

    return (
        <View style={styles.form}>
            <View style={styles.contentTextInput} >
                <Text style={{ fontSize: 15, marginLeft: 5 }} >Nome da Pasta</Text>
            </View>
            <TextInput
                value={description}
                placeholder="Search Folder"
                onChangeText={setDescription}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
            />
            <TouchableOpacity onPress={handleSubmit} style={{ justifyContent: 'center', alignSelf: 'center', width: 200, height: 60 }}>
                <View style={styles.contentAddFolderButton}>
                    <Entypo name="plus" size={24} color={COLORS.white} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export const ModalAddArchive = () => {

    const [type, setType] = useState<'folder' | 'card'>('folder');
    const { isOpen, onClose } = useAddFolderModal();

    return (
        <Modal
            backdropOpacity={0.2}
            isVisible={isOpen}
            onBackdropPress={onClose}
            style={styles.contentView}
            avoidKeyboard
        >
            <View style={styles.content}>
                <View style={styles.contentButtons}>
                    <View style={styles.contentButton}>
                        <TouchableOpacity onPress={() => setType('folder')} style={dinamicStyledButton(type).styledFolder}>
                            <Text style={dinamicStyledButton(type).styledTextFolder}>Nova Pasta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentButton}>
                        <TouchableOpacity onPress={() => setType('card')} style={dinamicStyledButton(type).styledCard}>
                            <Text style={dinamicStyledButton(type).styledTextCard}>Novo Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {type === 'folder' ? (<FormNewFolder />) : (<Text>Lets go create a {type}</Text>)}

            </View>
        </Modal >
    );
}
