import { auth } from "@/lib/auth";

export async function GET(req: Request) {
  return auth.api.handleOAuthCallback(req);
}
