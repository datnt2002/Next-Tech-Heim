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
      register: async (data: RegisterRequestBody) => {
        const response = await registerService(data);

        if (response.isError) {
          console.log("fetch fail", response);
        }

        const { setOpen } = useModalStore.getState();
        setOpen("isAuthModalOpen", false);
        setOpen("isSuccessModalOpen", true);
        set((state) => ({ ...state, user: response.data }));
      },
    }),
    { name: "UserStore" }
  )
);

export default useUserStore;
