"use client"

import { authClient } from "@/lib/auth-client"; // import the auth client


export default function Dashboard() {
    const {
      data: session,
      isPending, //loading state
      error, //error object
      refetch, //refetch the session
    } = authClient.useSession();
    console.log(session)
  return <div className="min-h-screen pt-20"><p>{session?.user?.name}</p></div>;
}
