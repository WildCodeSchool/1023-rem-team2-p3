import React, { useContext } from "react";

import ReactDOM from "react-dom/client";
import {
  // Outlet,
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter as Router,
} from "react-router-dom";
import AOS from "aos";
import Layout from "./components/layout/Layout";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Workshop from "./pages/Workshop/Workshop";
// import Signup from "./pages/Signup/Signup";
// import Login from "./pages/Login/Login";
// import Giveaway from "./pages/Giveaway/Giveaway";
// import Legal from "./pages/Legal/Legal";
// import Privacy from "./pages/Privacy/Privacy";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { UserContext, UserProvider } from "./context/UserContext";
import "./index.css";
// import App from "./App";
import "aos/dist/aos.css";
// import CopilotPages from "./pages/CopilotPages/CopilotPages";
// import BackOfficePages from "./pages/BackOfficePages/BackOfficePages";

const NotAutentificated = React.lazy(() => import("./NotAutentificated"));

const Authentificated = React.lazy(() => import("./Authentificated"));

export default function AppLayout() {
  const { user } = useContext(UserContext);
  console.info("user", user);
  // const { user, setUser } = useContext(UserContext);
  // console.info("user", user);
  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/me`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.info(res);
  //       setUser(res);
  //     })
  //     .catch((err) => console.info(err));
  // }, [setUser]);
  return (
    <Layout>
      <React.Suspense fallback={<h1 className="text-white">Loading ... </h1>}>
        {user.isLogged ? <Authentificated /> : <NotAutentificated />};
      </React.Suspense>
    </Layout>
  );
}
// const { user } = useContext(UserContext);

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         element: (
//           <React.Suspense
//             fallback={<h1 className="text-white">Loading ... </h1>}
//           >
//             {user.isLogged ? <Authentificated /> : <NotAutentificated />};
//           </React.Suspense>
//         ),
//       },
//       // { element: <NotAutentificated /> },

//       /* user */
//       // { path: "/", element: <App /> },
//       // { path: "about", element: <About /> },
//       // { path: "contact", element: <Contact /> },
//       // { path: "workshops", element: <Workshop /> },
//       // { path: "signup", element: <Signup /> },
//       // { path: "login", element: <Login /> },
//       // { path: "giveaway", element: <Giveaway /> },
//       // { path: "legal", element: <Legal /> },
//       // { path: "privacy", element: <Privacy /> },
//       // { path: "forgot/password", element: <ForgotPassword /> },
//       /* logged */
//       // { path: "copilot", element: <CopilotPages /> },
//       // { path: "backoffice", element: <BackOfficePages /> },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <AppLayout />
      </UserProvider>
    </Router>
  </React.StrictMode>
);

AOS.init();
