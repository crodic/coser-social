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

export const signIn = async (values: LoginSchemaType) => {
  const res = await http.post<LoginResType>("/auth/login", values);
  return res.data;
};
export const signUp = async () => {};
export const logout = async () => {};
export const refreshTokenApi = async () => {};
export const verifyAccount = async () => {};
