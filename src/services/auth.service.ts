"use server";
import {
  LoginRequestBody,
  LoginResponseType,
  RegisterRequestBody,
  RegisterResponseType,
} from "@/types/user.type";
import { httpClient } from "./http.service";

export const registerService = (body: RegisterRequestBody) => {
  return httpClient.post<RegisterResponseType, RegisterRequestBody>(
    "auth/register",
    body
  );
};

export const loginService = (body: LoginRequestBody) => {
  return httpClient.post<LoginResponseType, LoginRequestBody>(
    "auth/login",
    body
  );
};
