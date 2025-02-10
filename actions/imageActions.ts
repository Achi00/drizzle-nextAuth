"use server";
import { db } from "@/db";
import { userImages } from "@/db/schema";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function uploadUserImage(imageUrl: string) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
    // return NextResponse.redirect(new URL("/access-denied"));
  }

  // console.log("session", session.user.id);
  // console.log("imageUrl", imageUrl);

  const newImage = await db
    .insert(userImages)
    .values({
      userId: session.user.id,
      imageUrl,
      createdAt: new Date(),
    })
    .returning();

  return newImage;
}
