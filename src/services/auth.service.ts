'use server'
import { LoginRequestBody, RegisterRequestBody, UserResponseType } from '@/types/user.type'
import { httpClient } from './http.service'

export const registerService = (body: RegisterRequestBody) => {
  return httpClient.post<UserResponseType, RegisterRequestBody>('auth/register', body)
}

export const loginService = (body: LoginRequestBody) => {
  return httpClient.post<UserResponseType, LoginRequestBody>('auth/login', body)
}

export const getMyProfileService = () => {
  return httpClient.get<UserResponseType>('auth/profile')
}
