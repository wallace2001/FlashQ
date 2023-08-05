import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../config/firebaseConfig";

export const getFolders = (path: string) => {
    const queryArchives = query(collection(db, path), orderBy("type", "desc"));

    const [docs, loading] = useCollectionData(queryArchives);

    return { docs, loading };
};