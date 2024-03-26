import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Workshop from "./pages/Workshop/Workshop";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Giveaway from "./pages/Giveaway/Giveaway";
import Legal from "./pages/Legal/Legal";
import Privacy from "./pages/Privacy/Privacy";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { UserProvider } from "./context/UserContext";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "workshops", element: <Workshop /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      { path: "giveaway", element: <Giveaway /> },
      { path: "legal", element: <Legal /> },
      { path: "privacy", element: <Privacy /> },
      { path: "forgot/password", element: <ForgotPassword /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

AOS.init();
