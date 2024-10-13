"use server";

import * as z from "zod";
// import { AuthError } from "next-auth";

import { LoginSchema } from "@/../schemas/index";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  callbackUrl?: string | null
) => {
  if (!values) {
    return {
      error: "Something went wrong",
    };
  } else {
    console.log(values);
    return {
      success: "Logged in successfully",
      twoFactor: true,
    };
  }
};
