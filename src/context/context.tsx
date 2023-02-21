import React, {
    createContext, 
    ReactNode, 
    useState, 
} from 'react';
import _ from "lodash";
import { setDoc, doc, DocumentData } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

interface PropsContext{
    folders: IFolder[];
    path: string;
    changeFolders(folders: DocumentData[] | undefined): void;
    selectFolder(folder: IFolder): void;
    createFolder(pars: IPars): void;
};

interface PropsProvider{
    children: ReactNode;
};

export interface IPars {
    text: string;
    type: string;
    path: string;
}

export interface IFolder {
    id: string;
    path: string;
    text: string;
    type: string;
}

export const MobileContext = createContext({} as PropsContext);

export const MobileProivder = ({children}: PropsProvider) => {
    const [path, setPath] = useState<string>('FlashQ');
    const [folders, setFolders] = useState<IFolder[]>([]);

    // Create a new folder or subfolder
    const createFolder = async (pars: IPars) => {
        try {
            pars.path = path;
            const docRef = doc(db, path, pars.text);
            await setDoc(docRef, pars);
        } catch (error) {
            console.log("error: ", error);
        }
    };

    // List files inside selected folder
    const changeFolders = (docs: DocumentData[] | undefined) => {
        const foldersMapped: IFolder[] = _.map(docs, (doc: DocumentData) => {
            return {
                id: doc.id,
                path: doc.path,
                text: doc.text,
                type: doc.type
            } as IFolder;
        });
        setFolders(foldersMapped);
    }

    // Enter a folder
    const selectFolder = async (folder: IFolder) => {
        setPath(folder.path.concat(`/${folder.text}/children`));
    };

    return (
        <MobileContext.Provider value={{
            path,
            folders,
            changeFolders,
            selectFolder,
            createFolder
        }}>
            {children}
        </MobileContext.Provider>
    );
};