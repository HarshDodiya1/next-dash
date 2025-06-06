"use server";

import * as z from "zod";


import { getUserByEmail } from "@/../data/user";
import { RegisterSchema } from "@/../schemas/index";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // const verificationToken = await generateVerificationToken(email);
  // await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "User Created!" };
};
