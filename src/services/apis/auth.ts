import { http } from "@/lib/http";
import { UserLoginResType } from "@/types/user.type";
import { LoginSchemaType } from "@/validations/auth.schema";

interface LoginResType {
  message: string;
  metadata: {
    accessToken: string;
    refreshToken: string;
  };
  payload: UserLoginResType;
}

interface RefreshTokenResType {
  accessToken: string;
  refreshToken: string;
}

export const signIn = async (values: LoginSchemaType) => {
  const res = await http.post<LoginResType>("/auth/login", values);
  return res.data;
};
export const signUp = async () => {};
export const logout = async () => {};
export const refreshTokenApi = async (token: string) => {
  console.log(">>> Refresh token: ", token);
  const res = await http.post<RefreshTokenResType>("/auth/refresh-token", { token });
  return res.data;
};
export const verifyAccount = async () => {};
