import axios from "axios";
import * as SecureStore from 'expo-secure-store';

import Constants from "expo-constants";
import { useRouter } from "expo-router";
import { useUserState } from "@/store/userStore";


const api = axios.create({
  baseURL: Constants?.expoConfig?.extra?.BACKEND_URL as string, 
  headers: {
  },
  withCredentials:true
});

api.interceptors.request.use(
  async (config) => {

    const token = await SecureStore.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (Handles errors globally)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log("API Error:", error.response?.data || error.message);
    const originalRequest = error.config;
    const router=useRouter()
    const {user,isAuthenticated,logout}=useUserState()
    const { code, message } = error.response.data;

    if(code==="TOKEN_EXPIRED"){
      try{
        const refreshToken = await SecureStore.getItemAsync("refresh_token");
        if (!refreshToken) {
          throw new Error("No refresh token found");
        }
        const { data } = await api.post("/auth/refresh", {
          refreshToken,
        });

        if(data.accessToken){
          await SecureStore.setItemAsync("token",data.accessToken);
          originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
          return axios(originalRequest);
        }
      }catch(refreshError){
        console.error("Refresh token failed", refreshError);
        await SecureStore.deleteItemAsync("token");
        await SecureStore.deleteItemAsync("refresh_token");
          logout()
          router.replace("(auth)/Auth")
          return Promise.reject(refreshError);
      }
    }
    if (code === "UNAUTHORIZED") {
      console.warn("Unauthorized - redirecting to login");
      await SecureStore.deleteItemAsync("access_token");
      await SecureStore.deleteItemAsync("refresh_token");
      router.replace("(auth)/Auth"); 
      return Promise.reject(error);
    }
  
    return Promise.reject(error);
  }
);

export default api;
