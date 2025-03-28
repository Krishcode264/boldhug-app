import React, { useEffect, useState } from "react";

import { User } from "@/constants/Types";
import { getValueFromEcriptedStorage } from "@/util/appStorage";
import { useUserState } from "@/store/userStore";
import { useApi } from "./axios";
import { isLoading } from "expo-font";
import { set } from "zod";
import { router } from "expo-router";

const useAuthNavigation = () => {
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user, setUser } = useUserState();
  const { loading: waiting, data, call: getUser, error, isError } = useApi();
  const { call: handleRefreshToken } = useApi();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const parsedUser = await getValueFromEcriptedStorage("user");
      const token = await getValueFromEcriptedStorage("token");
      const refreshToken = await getValueFromEcriptedStorage("refresh_token");

      if (token) {
    
        
      
          const res = await getUser("/user", {}, "GET");
          if (res) {
            setUser(res.data);
            setLoading(false);
            return;
          }
        
      }
      else{
        setLoading(false);
        return
      }
    })();
  }, []);

  return { loading };
};

export default useAuthNavigation;
