import { IUser, RegisterRequestBody } from "@/types/user.type";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import useModalStore from "./modal";
import { registerService } from "@/services/auth.service";

export interface UserState {
  user: IUser | undefined;
  register: (data: RegisterRequestBody) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      user: undefined,
      register: (data: RegisterRequestBody) => {
        const { setOpen } = useModalStore.getState();

        setOpen("isSuccessModalOpen", true);
        set((state) => ({ ...state, user: data }));
      },
    }),
    { name: "UserStore" }
  )
);

export default useUserStore;
