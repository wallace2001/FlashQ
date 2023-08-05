import React, {
    createContext, 
    ReactNode, 
    useState, 
} from 'react';
import _ from "lodash";
import { DocumentData } from 'firebase/firestore';
import { createFolder } from '../actions/folder';
import { IArchive } from '../types';

interface PropsContext{
    archives: IArchive[];
    path: string;
    changeFolders(archives: DocumentData[] | undefined): void;
    selectFolder(archive: IArchive): void;
    setPath(value: string): void;
};

interface PropsProvider{
    children: ReactNode;
};

export interface IPars {
    id: string;
    text: string;
    type: string;
    path: string;
    quantityArchives: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IFolder {
    id: string;
    path?: string;
    text: string;
    type?: string;
    empty?: boolean;
}

export const MobileContext = createContext({} as PropsContext);

export const MobileProivder = ({children}: PropsProvider) => {
    const [path, setPath] = useState<string>('FlashQ');
    const [archives, setArchives] = useState<IArchive[]>([]);

    // List files inside selected folder
    const changeFolders = (docs: DocumentData[] | undefined) => {
        const foldersMapped: IArchive[] = _.map(docs, (doc: DocumentData) => {
            return {
                id: doc.id,
                path: doc.path,
                text: doc.text,
                type: doc.type,
                backImage: doc.backImage,
                frontImage: doc.frontImage,
                response: doc.response,
                title: doc.title
            } as IArchive;
        });
        setArchives(foldersMapped);
    }

    // Enter a folder
    const selectFolder = async (archive: IArchive) => {
        if (archive.path) {
            const newPath = archive?.path.concat(`/${archive.text}/children`);
            setPath(newPath);
        }
    };

    return (
        <MobileContext.Provider value={{
            path,
            archives,
            changeFolders,
            selectFolder,
            setPath
        }}>
            {children}
        </MobileContext.Provider>
    );
};