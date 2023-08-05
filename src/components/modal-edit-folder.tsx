import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import useEditFolderModal from "../hooks/use-edit-folder-modal";
import { FormFolder } from "./Form/form-folder";
import { IPars, MobileContext } from "../context/context";
import { editFolder } from "../actions/folder";

export const ModalEditFolder = () => {

    const { path } = useContext(MobileContext);
    const { isOpen, folder, onClose } = useEditFolderModal();

    const handleSubmit = (pars: IPars) => {
        if (folder?.id) {
            const newPars = {
                id: folder.id,
                text: pars.text,
                updatedAt: new Date(),
            };
    
            editFolder(newPars, path);
            onClose();
        }
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
                <FormFolder
                    folder={folder}
                    onSubmit={(pars: IPars) => handleSubmit(pars)}
                />
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    contentView: {
        justifyContent: 'center',
        margin: 0,
    },
    content: {
        backgroundColor: '#f7f7f7',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 20,
    },
});