import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bom dia Wallace 👋</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    text: {
        color: '#fff',
        fontSize: 30,
    }
});