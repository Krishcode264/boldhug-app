import api from "@/util/axios";
import { UseBaseMutationResult, useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { z } from "zod";

export type OtpResponse = {
  success: boolean;
};
export const sendOtp = async (
  identifier: string
): Promise<AxiosResponse<OtpResponse>> => {
  console.log("res or nt");

    const response = await api.post("/auth/otp/generate", { identifier });
    console.log(response.data, "here is res.data");

    return response.data;

};

export const useSendotp = () => {
  return useMutation({
    mutationFn: (identifier: string) => sendOtp(identifier),
  });
};
