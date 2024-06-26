/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [token, setToken] = useState(() =>
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!token) {
      setUser({});
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/me`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          setUser({});
          console.error(
            `Failed to fetch user data. HTTP status: ${response.status}`
          );
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);

        setUser({});
      }
    };

    fetchUserData();
  }, [token]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,

      token,
      updateToken: (newToken) => {
        if (newToken) {
          localStorage.setItem("token", JSON.stringify(newToken));
        } else {
          localStorage.removeItem("token");
        }
        setToken(newToken);
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/usermissions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.info("Success:", data);
          })
          .catch((err) => console.info(err));
      },
    }),
    [user, token]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
