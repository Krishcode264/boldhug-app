import { ImagePickerAsset } from "expo-image-picker";
import { create } from "zustand";

export type ProfilePhoto = {
  id: string;
  url: string;
  type:string
};
export type User = {
  id: string;
  name?:string;
  userName?: string;
  age?: number;
  gender?: string;
  email?: string;
  intrests: string[];
  createdAt: Date;
  updatedAt: Date;
  role?: "user" | "admin";
  mobileNo?: string;
  profilePhoto?: ProfilePhoto;
};
export type EditUser = {
  profilePhoto: ImagePickerAsset|null;
  name: string;
};
export type EditUserProfile = {
  user: EditUser | null;
  setState: (user: EditUser) => void;
};
export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: Partial<User>) => void;
  logout: () => void;
}

export const useEditUserState = create<EditUserProfile>((set) => ({
  user: null,
  setState: (user) => set((store) => ({ user: { ...store.user, ...user } })),
}));

export const useUserState = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) =>
    set((state) => ({
      isAuthenticated: true,
      user: state.user
        ? { ...state.user, ...user }
        : user.id
        ? ({ ...user } as User)
        : null,
    })),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export interface PreAuthState {
  identifier: string;
  existedUser: boolean;
  authAction: "CREATE" | "SIGNIN";
  updatePreAuthState: (updates: Partial<PreAuthState>) => void;
}

export const usePreAuthState = create<PreAuthState>((set) => ({
  identifier: "",
  existedUser: false,
  authAction: "SIGNIN",
  updatePreAuthState: (updates) => set((state) => ({ ...state, ...updates })),
}));
