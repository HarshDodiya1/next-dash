import type { NextAuthConfig } from "next-auth";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import LinkedIn from "next-auth/providers/linkedin";
import NotionProvider from "next-auth/providers/notion";

export default {
  providers: [GitHub, Google, LinkedIn, NotionProvider],
} satisfies NextAuthConfig;
