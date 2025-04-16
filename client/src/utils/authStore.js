import {create} from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(persist((set) => ({
  currentUser: null,
  setCurrentUser: (newUser) =>
    set({
      currentUser: newUser,
    }),
  removeCurrUser: () => set({ currentUser: null }),
  updateCurrentuser: (updatedUser) => set({ currentUser: updatedUser }),
})));

export default useAuthStore;
