"use server";

import { signIn } from "@/auth";
import { LoginSchemaType } from "@/validations/auth.schema";
import { AuthError } from "next-auth";

export const loginAction = async (values: LoginSchemaType) => {
  try {
    await signIn("credentials", values);
    return {
      error: false,
      message: "LoginSuccess",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      console.log("Error Message: ", error.cause?.err?.message);
      return {
        error: true,
        message: error.cause?.err?.message || "Invalid Credentials",
      };
    }
  }
};
