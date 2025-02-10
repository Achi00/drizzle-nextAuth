import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

console.log("Creating database connection...");
console.log(process.env.DATABASE_URL);

const pool = neon(process.env.DATABASE_URL!);

export const db = drizzle(pool);
