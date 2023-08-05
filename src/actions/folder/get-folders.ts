import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../config/firebaseConfig";

export const getFolders = (path: string) => {
    const query = collection(db, path);
    const [docs, loading] = useCollectionData(query);

    return { docs, loading };
};