import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface ModalState {
  isAuthModalOpen: boolean;
  isSuccessModalOpen: boolean;
  setOpen: (key: keyof ModalState, isOpen: boolean) => void;
}

const useModalStore = create<ModalState>()(
  devtools(
    (set) => ({
      isAuthModalOpen: false,
      isSuccessModalOpen: false,

      setOpen: (key, isOpen) => {
        set((state) => ({
          ...state,
          [key]: isOpen,
        }));
      },
    }),
    {
      name: "ModalStore",
    }
  )
);

export default useModalStore;
