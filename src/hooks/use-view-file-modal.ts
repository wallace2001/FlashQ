import { create } from "zustand";
import { IArchive } from "../types";

interface ViewFileModalStore {
    isOpen: boolean;
    card: IArchive;
    onOpen(card: IArchive): void;
    onClose(): void;
}

const useViewFileModal = create<ViewFileModalStore>((set) => ({
    isOpen: false,
    card: {
        id: '',
        text: '',
        type: '',
    },
    onOpen: (card: IArchive) => set({isOpen: true, card}),
    onClose: () => set({isOpen: false})
}));

export default useViewFileModal;