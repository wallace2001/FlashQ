import { doc, setDoc } from "firebase/firestore";
import { IPars } from "../../context/context";
import { db } from "../../config/firebaseConfig";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const createFolder = async (pars: IPars, path: string) => {
    try {
        pars.path = path;
        const docRef = doc(db, path, pars.id);
        await setDoc(docRef, pars);
        Toast.show({
            type: 'success',
            text1: 'Pasta criada com sucesso.',
        });
    } catch (error) {
        console.log("error: ", error);
    }
};