import { useContext } from "react";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
import useAddCardModal from "../../hooks/use-add-modal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import useAddFolderModal from "../../hooks/use-add-folder-modal";
import { ModalAddFolder } from "../modal-add-folder";
import { MobileContext } from "../../context/context";

interface IModalAddArchive {
    onPressCard(): void;
};

export const ModalAddArchive = ({
    onPressCard
}: IModalAddArchive) => {

    const { path } = useContext(MobileContext);
    const { isOpen, onClose } = useAddCardModal();
    const { onOpen } = useAddFolderModal();
    return (
        <Modal
            backdropOpacity={0.2}
            isVisible={isOpen}
            onBackdropPress={onClose}
            style={styles.contentView}
            animationInTiming={1}
            animationOutTiming={1}
            propagateSwipe={true}
        >
            <View style={styles.content}>
                <View style={styles.contentButtons}>
                    <View style={styles.contentButton}>
                        <TouchableOpacity onPress={onOpen} style={styles.buttonCreate}>
                            <Text style={styles.text}>Nova Pasta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentButton}>
                        <TouchableOpacity 
                            disabled={path === 'FlashQ'} 
                            onPress={onPressCard} 
                            style={[styles.buttonCreate, { backgroundColor: path === 'FlashQ' ? '#969696' : '#fff' }]}
                        >
                            <Text style={styles.text}>Novo Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ModalAddFolder />
        </Modal >
    );
}
