// import { createAuthClient } from "better-auth/react";

// export const authClient = createAuthClient({
//   baseURL: "http://localhost:3000",
// });

// export const { signIn, signUp, useSession } = authClient;

// import { createAuthClient } from "better-auth/client";
// const authClient = createAuthClient();

// const signIn = async () => {
//   const data = await authClient.signIn.social({
//     provider: "google",
//   });
// };

// auth.ts
import { createAuthClient } from "better-auth/react";
import { createAuthClient as createClientAuthClient } from "better-auth/client";

// 1️⃣ React client for hooks & standard auth
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

// 2️⃣ Destructure for easy use in components
export const { signIn, signUp, useSession } = authClient;

// 3️⃣ Separate client for social login (Google, etc.)
const clientAuth = createClientAuthClient({
  baseURL: "http://localhost:3000",
});

// 4️⃣ React-friendly Google login
export const signInWithGoogle = async () => {
  try {
    // Do social login
    const data = await clientAuth.signIn.social({
      provider: "google",
    });

    // Optional: automatically sync the session in your React app
    // This triggers a re-render if you use `useSession()` in your components
    // await authClient.refreshSession();

    return data;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};
