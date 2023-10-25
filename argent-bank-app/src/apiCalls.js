// Call to long-in user
export const loginUser = async (user) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Invalid username or password");
    }

    const data = await response.json();
    const token = data.body.token;
    return token;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

// Call to get profile's data
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

    if (response.status !== 200) {
      throw new Error("Something went wrong with the profile's request");
    }
    const data = await response.json();
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
    return data.body;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Call to handle account's data
export const getAccounts = async (userId) => {
  if (userId) {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/account/${userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong with the account's request");
      }
      const data = await response.json();
      return data.body;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

// Call to handle transaction's data
export const getTransactions = async (accountId) => {
  if (accountId) {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/transaction/${accountId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong with the transaction's request");
      }
      const data = await response.json();
      return data.body;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
