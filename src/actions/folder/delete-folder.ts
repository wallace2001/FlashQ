import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const deleteFolder = async (name: string, path: string) => {
    try {
        const docRef = doc(db, path, name);
        await deleteDoc(docRef);
        Toast.show({
            type: 'success',
            text1: 'Pasta deletada com sucesso.',
        });
    } catch (error) {
        console.log("error: ", error);
    }
};