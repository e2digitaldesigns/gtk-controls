import { create, StoreApi } from "zustand";

interface IUserData {
  userId: string;
  twitchUsername: string;
}

interface UserDataState {
  userData: IUserData;
  setUserData: (data: IUserData) => void;
}

const useUserDataStore = create<UserDataState>(
  (set: StoreApi<UserDataState>["setState"], get: StoreApi<UserDataState>["getState"]) => ({
    userData: {
      userId: "",
      twitchUsername: ""
    },
    setUserData: (data: IUserData) => set({ userData: data })
  })
);

export default useUserDataStore;
