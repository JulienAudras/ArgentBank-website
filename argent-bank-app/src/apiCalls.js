// const POST_ProfileURL = "http://localhost:3001/api/v1/user/profile";

export const getProfile = async () => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong with the profile's request");
    }

    const data = await response.json();
    console.log("data, ", data);
    return data.body;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
