export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  number: number;
  avatarUrl?: string;
  password: string;
}

export type RegisterRequestBody = Omit<IUser, "avatarUrl" | "_id">;
export type RegisterResponseType = {
  data: IUser;
  isError: boolean;
  message: string;
  statusCode: number;
};

export type LoginRequestBody = {
  principle: string;
  password: string;
};

export type LoginResponseType = {
  data: IUser;
  isError: boolean;
  message: string;
  statusCode: number;
};
