import { Text, View } from "react-native";
import { useState, useContext } from "react";
import Modal from "react-native-modal";
import useAddFolderModal from "../../hooks/use-add-modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { dinamicStyledButton, styles } from "./styles";
import { FormFolder } from "../Form/form-folder";
import { IPars, MobileContext } from "../../context/context";
import { createFolder } from "../../actions/folder";

export const ModalAddArchive = () => {

    const [type, setType] = useState<'folder' | 'card'>('folder');
    const { path } = useContext(MobileContext);
    const { isOpen, onClose } = useAddFolderModal();

    const handleSubmit = (pars: IPars) => {
        createFolder(pars, path);
        onClose();
    };

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
                {type === 'folder' ? (
                    <FormFolder
                        onSubmit={(pars: IPars) => handleSubmit(pars)}
                    />
                ) : (
                    <Text>Lets go create a {type}</Text>
                )}

            </View>
        </Modal >
    );
}
