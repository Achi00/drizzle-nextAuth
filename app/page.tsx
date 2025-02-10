// app/page.tsx (or any server component)
import { cookies } from "next/headers";

export default async function Home() {
  // Get the cookies from the incoming request
  const cookieStore = await cookies();
  // Build a cookie header string by concatenating all cookies.
  const cookieHeader = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  // Use a relative URL for an internal fetch
  const response = await fetch("http://localhost:3000/api/images", {
    // Forward the cookie header so the API route (and middleware) sees the session
    headers: {
      cookie: cookieHeader,
    },
    // Prevent caching to ensure fresh data on each request
    cache: "no-store",
  });

  if (!response.ok) {
    // Optionally handle error responses here.
    const errorData = await response.json();
    throw new Error(
      `Failed to fetch images: ${errorData.error || response.statusText}`
    );
  }

  const images = await response.json();

  return (
    <div>
      <h1>User Images</h1>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.imageUrl} alt={`Image ${image.id}`} width={200} />
          </li>
        ))}
      </ul>
    </div>
  );
}
