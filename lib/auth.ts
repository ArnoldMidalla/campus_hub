// import { betterAuth } from "better-auth";
// import { Pool } from "pg";
// // import { pool } from "./db";

// export const auth = betterAuth({
//       database: new Pool({
//         // connection options
//     }),
//   // database: {
//   //   type: "postgres",
//   //   pool,
//   // },

//   // emailAndPassword: {
//   //   enabled: true,
//   // },

// });

import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true, // Required for Neon cloud connections
  }),
  emailAndPassword: {
    enabled: true,
  },
  baseURL: process.env.BETTER_AUTH_URL, 
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID! as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET! as string,
    },
  },
});
