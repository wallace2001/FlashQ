import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 15,
    },
    contentArrowBack: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginRight: 40,
    },
    viewContentArrow: {

    },
    content: {
        width: '100%',
        maxHeight: '83%',
        marginTop: 20,
    },
    item: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flexBasis: 0,
        marginHorizontal: 12,
        marginVertical: 4
    },
});