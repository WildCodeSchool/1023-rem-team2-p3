/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";

// import AuthenticatedAppAdmin from "./AuthenticatedAppAdmin";
import Payment from "./components/DashBoard/Payment/Payment";
import Layout from "./components/layout/Layout";
import { UserContext, UserProvider } from "./context/UserContext";
import "./index.css";
import About from "./pages/About/About";
import BackOfficePages from "./pages/BackOfficePages/BackOfficePages";
import CodePromo from "./pages/BackOfficePages/CodePromo";
import EventBackoffice from "./pages/BackOfficePages/EventBackoffice";
import Notes from "./pages/BackOfficePages/Notes";
import Product from "./pages/BackOfficePages/Product";
import ScoreCard from "./pages/BackOfficePages/ScoreCard";
import User from "./pages/BackOfficePages/User";
import Contact from "./pages/Contact/Contact";
import CopilotContactPage from "./pages/CopilotPages/CopilotContactPage";
import CopilotGiftPage from "./pages/CopilotPages/CopilotGiftPage";
import CopilotMissionPage from "./pages/CopilotPages/CopilotMissionPage";
import CopilotPages from "./pages/CopilotPages/CopilotPages";
import CopilotProfilePage from "./pages/CopilotPages/CopilotProfilePage";
import CopilotTrainingPage from "./pages/CopilotPages/CopilotTrainingPage";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Giveaway from "./pages/Giveaway/Giveaway";
import Legal from "./pages/Legal/Legal";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Participate from "./pages/Paticipate/Participate";
import Privacy from "./pages/Privacy/Privacy";
import Signup from "./pages/Signup/Signup";
import Workshop from "./pages/Workshop/Workshop";

export default function AppLayout() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/giveaway" element={<Giveaway />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />

          {user?.isLogged ? (
            user.data?.is_admin === "admin" ? (
              <>
                <Route path="/backoffice" element={<BackOfficePages />} />
                <Route path="/backoffice/users" element={<User />} />
                <Route
                  path="/backoffice/events"
                  element={<EventBackoffice />}
                />
                <Route path="/backoffice/notes" element={<Notes />} />
                <Route path="/backoffice/scorecard" element={<ScoreCard />} />
                <Route path="/backoffice/payment" element={<Payment />} />
                <Route path="/backoffice/product" element={<Product />} />
                <Route path="/backoffice/codepromo" element={<CodePromo />} />
              </>
            ) : (
              <>
                <Route path="/copilot" element={<CopilotPages />} />
                <Route
                  path="/copilot/copilotprofile"
                  element={<CopilotProfilePage />}
                />
                <Route
                  path="/copilot/copilotentrainements"
                  element={<CopilotTrainingPage />}
                />
                <Route
                  path="/copilot/copilotmissions"
                  element={<CopilotMissionPage />}
                />
                <Route
                  path="/copilot/copilotcontact"
                  element={<CopilotContactPage />}
                />
                <Route
                  path="/copilot/copilotcadeaux"
                  element={<CopilotGiftPage />}
                />
                <Route path="/copilot/participate" element={<Participate />} />
              </>
            )
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="forgot/password" element={<ForgotPassword />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <AppLayout />
  </UserProvider>
);
