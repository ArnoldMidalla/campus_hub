import AuthLayout from "@/app/components/authLayout";
import GoogleButton from "@/app/components/googleBtn";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your email and password to access your account."
    >
      <form className="space-y-4">
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="sellostore@company.com"
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

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>
          <span className="text-blue-600 cursor-pointer hover:underline">
            Forgot your password?
          </span>
        </div>

        <button className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
          Log In
        </button>

        <div className="text-center text-sm text-gray-400">or login with</div>

        <GoogleButton label="Google" />

        <p className="text-sm text-center text-gray-500 mt-4">
          Don''t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Register now
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}
