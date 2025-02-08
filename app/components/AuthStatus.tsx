"use client";
import { useSession } from "next-auth/react";

export default function AuthStatus() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <p>Logged in as {session.user?.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
