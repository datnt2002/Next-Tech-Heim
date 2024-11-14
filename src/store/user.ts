import {
  IUser,
  LoginResponseType,
  RegisterResponseType,
} from "@/types/user.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import useModalStore from "./modal";

export interface UserState {
  user: IUser | undefined;
  register: (data: RegisterResponseType) => void;
  login: (data: LoginResponseType) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      user: undefined,
      register: (data: RegisterResponseType) => {
        const { setOpen } = useModalStore.getState();

        setOpen("isSuccessModalOpen", true);
        set((state) => ({ ...state, user: data.data }));
      },
      login: (data: LoginResponseType) => {
        set((state) => ({ ...state, user: data.data }));
      },
    }),
    { name: "UserStore" }
  )
);

export default useUserStore;
