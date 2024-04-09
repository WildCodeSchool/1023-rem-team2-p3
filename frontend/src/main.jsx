import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import Layout from "./components/layout/Layout";
import { UserContext, UserProvider } from "./context/UserContext";
import "./index.css";
import "aos/dist/aos.css";

const NotAutentificated = React.lazy(() => import("./NotAuthentificated"));

const Authentificated = React.lazy(() => import("./Authentificated"));

export default function AppLayout() {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <React.Suspense
        fallback={
          <h1 className="text-white font-secondary-font">Loading ... </h1>
        }
      >
        {user.isLogged ? <Authentificated /> : <NotAutentificated />};
      </React.Suspense>
    </Layout>
  );
}

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
