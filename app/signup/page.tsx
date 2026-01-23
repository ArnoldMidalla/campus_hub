"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthLayout from "@/app/components/authLayout";
import GoogleButton from "@/app/components/googleBtn";
import { signUp } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await signUp.email(
      {
        email,
        password,
        name,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
        onRequest: () => {
          setLoading(true);
        },
      }
    );

    setLoading(false);
  }

  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Sign up to start managing your team and operations."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="john@company.com"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border rounded-lg px-3 py-2 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <div className="text-center text-sm text-gray-400">or sign up with</div>

        <GoogleButton label="Google" />

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}
