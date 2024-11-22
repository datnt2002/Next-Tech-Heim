export interface IUser {
  _id: string
  name: string
  username: string
  email: string
  number: number
  avatarUrl?: string
  password: string
}

export type UserResponseType = {
  data: IUser
  isError: boolean
  message: string
  statusCode: number
}

export type RegisterRequestBody = Omit<IUser, 'avatarUrl' | '_id'>

export type LoginRequestBody = {
  principle: string
  password: string
}
