import { LoginSchema } from "@/../schemas/index";
import * as z from "zod";

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
