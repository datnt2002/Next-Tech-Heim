import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface ModalState {
  isAuthModalOpen: boolean;
  setOpen: (key: keyof ModalState, isOpen: boolean) => void;
}

const useModalStore = create<ModalState>()(
  devtools((set) => ({
    isAuthModalOpen: false,
    setOpen: (key, isOpen) => {
      set((state) => ({
        ...state,
        [key]: isOpen,
      }));
    },
  }))
);

export default useModalStore;
