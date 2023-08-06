import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import useAddFolderModal from "../hooks/use-add-folder-modal";
import { FormFolder } from "./Form/form-folder";
import { IPars, MobileContext } from "../context/context";
import { createFolder } from "../actions/folder";

export const ModalAddFolder = () => {

    const { path } = useContext(MobileContext);
    const { isOpen, onClose } = useAddFolderModal();

    const handleSubmit = (pars: IPars) => {
        
        const newPars = {
            ...pars,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        createFolder(newPars, path);
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
                <FormFolder
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