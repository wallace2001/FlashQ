import { Entypo } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/theme";
import useAddModal from "../hooks/use-add-modal";

export const EmptyFolder = () => {

    const { onOpen } = useAddModal();

    return (
        <View style={styles.contentEmpty}>
            <View style={styles.contentEmptyFolder}>
                <Image
                    source={require('../../assets/emptyFolder.png')}
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
    );
};

const styles = StyleSheet.create({
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