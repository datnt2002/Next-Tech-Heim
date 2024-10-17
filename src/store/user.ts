import { create } from "zustand";

const useUserStore = create((set) => ({
  user: undefined,
  register: async () => {
    // const data = await login()
  },
}));

export default useUserStore;
