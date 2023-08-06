import { create } from "zustand";
import { IFolder } from "../context/context";

interface AddFolderModalStore {
    isOpen: boolean;
    onOpen(): void;
    onClose(): void;
}

const useAddFolderModal = create<AddFolderModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useAddFolderModal;