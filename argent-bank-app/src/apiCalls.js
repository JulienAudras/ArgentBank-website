// Call to handle login/logout
// export const loginCall = async () => {
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userName: "test", password: "test" }),
//     });

//     if (!response.ok) {
//       throw new Error("Something went wrong with the login's request");
//     }

//     const data = await response.json();
//     console.log("dataFromloCallApi, ", data);
//     return data.body;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// Call to handle profile's data
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
    console.log("dataFromgetProfileCall, ", data);
    return data.body;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Call to change account's data
export const changeAccount = async (user) => {
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("updatedUserData, ", user);

    if (!response.ok) {
      throw new Error("Something went wrong with the change profile's request");
    }

    const data = await response.json();
    console.log("dataFromchangeAccountCall, ", data);
    return data.body;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
