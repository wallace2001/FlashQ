import { create } from "zustand";
import { IFolder } from "../context/context";

interface EditFolderModalStore {
    isOpen: boolean;
    folder: IFolder | undefined;
    onOpen(folder: IFolder): void;
    onClose(): void;
}

const useEditFolderModal = create<EditFolderModalStore>((set) => ({
    isOpen: false,
    folder: undefined,
    onOpen: (folder: IFolder) => set({isOpen: true, folder}),
    onClose: () => set({isOpen: false})
}));

export default useEditFolderModal;