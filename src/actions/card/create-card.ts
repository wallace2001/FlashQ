import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { IArchive } from "../../types";
import { NavigationProp } from "@react-navigation/native";

export const createCard = async (pars: IArchive, path: string, navigation: NavigationProp<ReactNavigation.RootParamList>) => {
    try {
        if (path === 'FlashQ') {
            Toast.show({
                type: 'error',
                text1: 'Não é possível salvar arquivos no diretorio raiz',
            });
            return;
        }

        const docRef = doc(db, path, pars.id);
        
        await setDoc(docRef, pars);
        Toast.show({
            type: 'success',
            text1: 'Card criado com sucesso.',
        });

        navigation.goBack();
    } catch (error) {
        console.log("error: ", error);
    }
};