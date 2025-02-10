"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthStatus() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <>
          <button onClick={() => signOut()}>Sign out</button>

          <p>Logged in as {session.user?.email}</p>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      )}
    </div>
  );
}
