import React, { useContext } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AuthenticatedAppAdmin from "./AuthenticatedAppAdmin";
import AuthenticatedAppUser from "./AuthenticatedAppUser";
import UnauthenticatedApp from "./UnauthenticatedApp";
import Assignment from "./components/Assignment/Assignment";
import Message from "./components/Message/Message";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import Profile from "./components/Profile/Profile";
import Training from "./components/Training/Training";
import Layout from "./components/layout/Layout";
import { UserContext, UserProvider } from "./context/UserContext";
import "./index.css";
import About from "./pages/About/About";
import BackOfficePages from "./pages/BackOfficePages/BackOfficePages";
import Contact from "./pages/Contact/Contact";
import CopilotPages from "./pages/CopilotPages/CopilotPages";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Giveaway from "./pages/Giveaway/Giveaway";
import Legal from "./pages/Legal/Legal";
import Login from "./pages/Login/Login";
import Privacy from "./pages/Privacy/Privacy";
import Signup from "./pages/Signup/Signup";
import Workshop from "./pages/Workshop/Workshop";
import { Dashboard } from "./screens";

export default function AppLayout() {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <Layout>
      <Outlet context={{ isAuthenticated }} />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/workshops", element: <Workshop /> },
      { path: "/giveaway", element: <Giveaway /> },
      { path: "/legal", element: <Legal /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "*", element: <NotFound /> },
      {
        element: <AuthenticatedAppUser />,
        children: [
          {
            path: "/copilot",
            element: <CopilotPages />,
            children: [
              { path: "dashboard", element: <Dashboard /> },
              { path: "training", element: <Training /> },
              { path: "assignment", element: <Assignment /> },
              { path: "orders", element: <Orders /> },
              { path: "profile", element: <Profile /> },
              { path: "messages", element: <Message /> },
            ],
          },
          {
            path: "/acces-refusee",
            element: (
              <p className=" border-2 rounded-full bg-white  text-red-600 text-6xl">
                sens interdit 😱
              </p>
            ),
          },
        ],
      },
      {
        element: <AuthenticatedAppAdmin />,
        children: [
          {
            path: "/backoffice",
            element: <BackOfficePages />,
          },
          {
            path: "/acces-refusee",
            element: (
              <p className="border-2 rounded-full bg-white  text-red-600 text-6xl">
                sens interdit 😱
              </p>
            ),
          },
        ],
      },
      {
        element: <UnauthenticatedApp />,
        children: [
          { path: "/signup", element: <Signup /> },
          { path: "/login", element: <Login /> },
          { path: "/forgot/password", element: <ForgotPassword /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />{" "}
  </UserProvider>
);

Aos.init();
