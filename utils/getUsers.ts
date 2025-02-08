export const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await res.json();
    console.log("users: " + JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
