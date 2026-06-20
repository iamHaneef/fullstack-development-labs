// core/api/userApi.js

export const getUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await res.json();

    // normalize data (important habit)
    return data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: "User", // placeholder
    }));
    
  } catch (error) {
    console.error(error);
    return [];
  }
};
