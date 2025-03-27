
import { User } from "@/constants/Types";
import * as SecureStore from "expo-secure-store";

export async function saveUser(user:User) {
  await SecureStore.setItemAsync("user", JSON.stringify(user));
}

export async function getUser() {
  const user = await SecureStore.getItemAsync("user");
  return user ? JSON.parse(user) : null;
}

export async function removeUser() {
  await SecureStore.deleteItemAsync("user");
}

export const getValueFromEcriptedStorage = async (key: string) => {
  try {
    const value =  SecureStore.getItem(key);
    if (!value) {
      return null;
    }
    return value;
  } catch {
    console.log('error with getting value for key ');
    return null;
  }
};
export const setValuetoEcriptedStorage = async (key:string,value:string) => {
    try {
     
        SecureStore.setItem(key,value);

      return true;
    } catch {
      console.log('error with getting value for key ');
      return null;
    }
  };
  