import { doc, updateDoc,  } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Toast } from "react-native-toast-message/lib/src/Toast";

interface IEditFolder {
    id: string;
    text: string;
    updatedAt: Date;
}

export const editFolder = async (pars: IEditFolder, path: string) => {
    try {
        const docRef = doc(db, path, pars.id);
        
        await updateDoc(docRef, {
            ...pars
        });
        Toast.show({
            type: 'success',
            text1: 'Pasta editada com sucesso.',
        });
    } catch (error) {
        console.log("error: ", error);
    }
};