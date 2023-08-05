import { useState } from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import Modal from "react-native-modal";
import useViewFileModal from "../hooks/use-view-file-modal";

export const ModalViewFile = () => {

    const [sideCard, setSideCard] = useState<'frontImage' | 'backImage'>('frontImage');
    const { isOpen, card, onClose } = useViewFileModal();

    const isFront = sideCard === 'frontImage';

    const reset = () => {
        setSideCard('frontImage');
    };
    return (
        <Modal
            backdropOpacity={0.2}
            isVisible={isOpen}
            animationInTiming={1}
            animationOutTiming={1}
            onBackdropPress={() => {
                onClose();
                setTimeout(() => {
                    reset();
                }, 100);
            }}
            style={styles.contentView}
            avoidKeyboard
        >
            <Pressable style={styles.content} onPress={() => setSideCard(isFront ? 'backImage' : 'frontImage')}>
                {/* <Text style={{ fontSize: 16 }}>Clique no card para ver {isFront ? 'o verso' : 'a frente'}</Text> */}
                <View style={styles.contentCard}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {card[sideCard] && (
                            <View key={card[sideCard]} style={styles.image}>
                                <Image
                                    source={{ uri: card[sideCard] }}
                                    style={{
                                        width: 80,
                                        height: 70
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        )}
                        <Text>{isFront ? card.title : card.response}</Text>
                    </View>
                </View>
            </Pressable>
        </Modal >
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    contentView: {
        justifyContent: 'center',
        margin: 0,
    },
    contentCard: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        borderRadius: 3,
        marginTop: 10,
        height: 70,
        marginBottom: 10
    },
});