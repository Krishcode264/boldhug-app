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

      if (user && token) {
        // console.log(token)
        setLoading(false);

        return;
      }
      if (parsedUser && token && JSON.parse(parsedUser)) {
        console.log("we have user and token ");

        setUser(JSON.parse(parsedUser));
        setLoading(false);
        return;
      } else {
        if (token) {
          console.log("we have an token ");
          const res = await getUser("/user", {}, "GET");
          if (res.user) {
            setUser(res.user);
            setLoading(false);
            return;
          }
        } else {
          setLoading(false);
          router.replace("(auth)/Auth");
        }
      }
    })();
  }, []);

  return { loading };
};

export default useAuthNavigation;
