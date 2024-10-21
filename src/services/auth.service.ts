"use server";
import { RegisterRequestBody, RegisterResponseType } from "@/types/user.type";
import { httpClient } from "./http.service";

export const registerService = (body: RegisterRequestBody) => {
  return httpClient.post<RegisterResponseType, RegisterRequestBody>(
    "auth/register",
    body
  );
};
