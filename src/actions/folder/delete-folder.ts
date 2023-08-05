import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const deleteFolder = async (name: string, path: string) => {
    try {
        const docRef = doc(db, path, name);
        console.log('ref: ', JSON.stringify(docRef));
        await deleteDoc(docRef);
    } catch (error) {
        console.log("error: ", error);
    }
};