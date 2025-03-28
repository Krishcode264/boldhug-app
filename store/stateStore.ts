import { ImagePickerAsset } from "expo-image-picker";
import { create } from "zustand";

export type OnBordingUser = {
  userName?: string;
  gender?: "male" | "female" | "other";
  age?: number;
  profilePhoto?: ImagePickerAsset;
  name?:string;
};
interface OnBoardingState {
  userName?: string;
  gender?: "male" | "female" | "other";
  age?: number;
  profilePhoto?: ImagePickerAsset;
  setState: (state:OnBordingUser) => void;
  removeState:()=>void;
  name?:string;
}

export const useOnBoardingState = create<OnBoardingState>((set) => ({
  
  setState: (updates) => set((state) => ({ ...state, ...updates })),
  removeState:()=>set((state) => ({})),
}));
