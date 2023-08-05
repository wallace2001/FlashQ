import { StyleSheet, Text, View, Image } from "react-native";

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentText}>
                <Text style={styles.text}>Hi <Text style={{fontSize: 20}}>Wallace</Text> 👋</Text>
                <Text style={styles.description}>What do you want to do today?</Text>
            </View>
            <View style={styles.contentImage}>
                <Image 
                    source={{uri: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    contentText: {
        justifyContent: 'flex-start',
    },
    contentImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    text: {
        color: '#202442',
        fontSize: 20,
    },
    description: {
        color: '#20222c68',
    },
});