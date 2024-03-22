import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Workshop from "./pages/Workshop/Workshop";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Giveaway from "./pages/Giveaway/Giveaway";
import "./index.css";
import AOS from "aos";
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
      { path: "/giveaway", element: <Giveaway /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

AOS.init();
