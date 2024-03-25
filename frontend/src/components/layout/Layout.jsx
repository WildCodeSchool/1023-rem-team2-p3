import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../../context/UserContext";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { user, setUser } = useContext(UserContext);
  console.info("user", user);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info(res);
        setUser(res);
      })
      .catch((err) => console.info(err));
  }, [setUser]);
  return (
    <>
      <Header />
      <main className="relative font-secondary_font min-h-[calc(100vh-415px)] grid place-items-center bg-gradient-to-b from-background-color-second to-background-color-first">
        {children}
      </main>
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
