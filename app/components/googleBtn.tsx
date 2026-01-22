"use client"

import { Button } from "@/components/ui/button";

export default function GoogleButton({ label }: any) {
  const signInWithGoogle = () => {
    window.location.href = "/api/auth/google";
  };

  return (
    <Button
      // className="w-full border rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-50 transition text-sm"
      className="flex-1 w-full"
      onClick={signInWithGoogle}
    >
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path
          fill="#EA4335"
          d="M24 9.5c3.5 0 6.7 1.2 9.2 3.3l6.9-6.9C35.9 2.1 30.3 0 24 0 14.6 0 6.6 5.4 2.7 13.2l8.1 6.3C12.6 13.3 17.8 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.7c-.3 2-1.9 5-5.5 7.1l8.5 6.6c5-4.6 6.4-11.3 6.4-17.3z"
        />
        <path
          fill="#FBBC05"
          d="M10.8 28.1c-.5-1.4-.8-2.9-.8-4.4s.3-3 .8-4.4l-8.1-6.3C.9 16.4 0 20.1 0 24s.9 7.6 2.7 11.1l8.1-6.3z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.3 0 11.6-2.1 15.4-5.8l-8.5-6.6c-2.3 1.6-5.3 2.7-6.9 2.7-6.2 0-11.4-3.8-13.2-9.1l-8.1 6.3C6.6 42.6 14.6 48 24 48z"
        />
      </svg>
      {label}
    </Button>
  );
}
