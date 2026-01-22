import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  return auth.api.signInWithOAuth({
    provider: "google",
    request: req,
  });
}
