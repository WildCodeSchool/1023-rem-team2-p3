/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  // const navigate = useNavigate();
  const [token, setToken] = useState(() => {
    // Initialisez le token à partir de localStorage, s'il est disponible
    const storedToken = localStorage.getItem("token");
    return storedToken ? JSON.parse(storedToken) : null;
  });

  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!token) {
      setIsAuthenticated(false);
      setUser({});
      return;
    }

    // Si un token est présent, fetch les données utilisateur
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
          setIsAuthenticated(false);
          setUser({});
          console.error(
            `Failed to fetch user data. HTTP status: ${response.status}`
          );
          return;
        }

        const data = await response.json();
        setUser(data);
        setIsAuthenticated(true);
        // if (user.data.is_admin === "user") {
        //   navigate("/copilot");
        // } else {
        //   navigate("/backoffice");
        // }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUserData();
  }, [token]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      isAuthenticated,
      setIsAuthenticated,
      token,
      updateToken: (newToken) => {
        if (newToken) {
          localStorage.setItem("token", JSON.stringify(newToken));
        } else {
          localStorage.removeItem("token");
        }
        setToken(newToken);
      },
    }),
    [user, isAuthenticated, token]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
