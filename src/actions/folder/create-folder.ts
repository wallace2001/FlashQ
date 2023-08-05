import { doc, setDoc } from "firebase/firestore";
import { IPars } from "../../context/context";
import { db } from "../../config/firebaseConfig";

export const createFolder = async (pars: IPars, path: string) => {
    try {
        pars.path = path;
        const docRef = doc(db, path, pars.id);
        await setDoc(docRef, pars);
    } catch (error) {
        console.log("error: ", error);
    }
};