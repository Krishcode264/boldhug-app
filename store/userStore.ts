import { create } from "zustand";

export type ProfilePhoto={
  id:string;
  url:string;
}
export type User = {
    id:string;
    userName?:string ;
    age?: number ;
    gender?: string ;
    email?: string ;
    intrests: string[];
    createdAt: Date;
    updatedAt: Date;
    role?:"user"|"admin";
    mobileNo?: string ;
    profilePhoto?:ProfilePhoto;
};
export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user:Partial<User>) => void;
  logout: () => void;
}

export const useUserState = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) =>
    set((state) => ({
      isAuthenticated: true, 
      user: state.user ? { ...state.user, ...user } : (user.id ? { ...user } as User : null),
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