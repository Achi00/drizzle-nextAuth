import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const GET = auth((req) => {
  if (!req.auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ message: "Protected data" });
});
