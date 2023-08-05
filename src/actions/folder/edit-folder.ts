import { collection, doc, updateDoc } from "firebase/firestore";
import { IPars } from "../../context/context";
import { db } from "../../config/firebaseConfig";

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
    } catch (error) {
        console.log("error: ", error);
    }
};