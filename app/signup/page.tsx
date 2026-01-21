import AuthLayout from "@/app/components/authLayout";
import GoogleButton from "@/app/components/googleBtn";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Sign up to start managing your team and operations."
    >
      <form className="space-y-4">
        <div>
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="john@company.com"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
          Create Account
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
