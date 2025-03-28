import api from "@/util/axios";
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { Alert } from "react-native";

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<any>(null);

  async function call(uri: string, data: any = null, type: "GET" | "POST" | "PUT"|"PATCH") {
    setLoading(true);
    setError("");
    setIsError(false);

    try {
      let res: AxiosResponse;
     
      if (type === "GET") {
        res = await api.get(uri, { params: {...data}});
      } else if (type === "POST") {
        console.log("sending post req")
        res = await api.post(uri, {...data});
      } else if (type === "PUT") {
        res = await api.put(uri, {...data});
      }else if (type === "PATCH") {
        res = await api.patch(uri, {...data});
      } else {
        throw new Error("Invalid request type");
      }

      setData(res.data);
      //console.log(`Response from ${type} request:`, res.data);
      return res.data;

    } catch (err) {
        console.log("catch triigerrr here in use api",err)
      if (err instanceof AxiosError) {
        console.log(err.message)
        console.log("Axios Error:", err.response?.data);
        setError(`${err?.response?.data.message} , ${err?.response?.data.code}`||err.message);
      } else {
        console.log("Unknown Error occurred.");
        setError("Request failed");
      }
      setIsError(true);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { call, loading, error, isError, data ,setError,setIsError};
};
