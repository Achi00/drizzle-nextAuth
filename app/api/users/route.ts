// import { NextResponse } from "next/server";
// import { db } from "@/db";
// import { usersTable } from "@/db/schema";
// import { eq } from "drizzle-orm";

// // get users
// export async function GET() {
//   // Query all users from the usersTable
//   const users = await db.select().from(usersTable);
//   console.log("users: " + JSON.stringify(users));
//   return NextResponse.json({ users });
// }

// // create users
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { fullName, email } = body;

//     // Validate the data as needed.
//     if (!fullName || !email) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // check if user already exists
//     const existingUser = await db
//       .select()
//       .from(usersTable)
//       .where(eq(usersTable.email, email));

//     console.log(existingUser);

//     if (existingUser.length === 0) {
//       console.log("creating user");
//       // Insert a new user into the database and return the inserted row.
//       const newUser = await db
//         .insert(usersTable)
//         .values({ fullName, email })
//         .returning();

//       return NextResponse.json({ user: newUser });
//     } else {
//       console.log("user already exists");
//       return NextResponse.json({ user: existingUser });
//     }
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
