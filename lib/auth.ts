import { betterAuth } from "better-auth";
import { pool } from "./db";

export const auth = betterAuth({
  database: {
    type: "postgres",
    pool,
  },

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
