import React from "react";
import { Routes, Route } from "react-router-dom";
import BackOfficePages from "./pages/BackOfficePages/BackOfficePages";
import CopilotPages from "./pages/CopilotPages/CopilotPages";
import App from "./App";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Workshop from "./pages/Workshop/Workshop";
import Giveaway from "./pages/Giveaway/Giveaway";
import Legal from "./pages/Legal/Legal";
import Privacy from "./pages/Privacy/Privacy";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

export default function Authentificated() {
  return (
    <Routes>
      <Route path="copilot" element={<CopilotPages />} />
      <Route path="backoffice" element={<BackOfficePages />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="workshops" element={<Workshop />} />
      <Route path="giveaway" element={<Giveaway />} />
      <Route path="legal" element={<Legal />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="forgot/password" element={<ForgotPassword />} />
    </Routes>
  );
}
