import { auth, signOut } from "@/auth";
import xior from "xior";

export const http = xior.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

http.interceptors.request.use(
  async (config) => {
    const session = await auth();
    if (session) config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await signOut({ redirect: true, redirectTo: "/auth/login" });
    }
    return Promise.reject(error);
  },
);
