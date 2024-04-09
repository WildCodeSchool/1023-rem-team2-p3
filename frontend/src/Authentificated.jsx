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
import User from "./pages/BackOfficePages/User";
import EventBackoffice from "./pages/BackOfficePages/EventBackoffice";
import Notes from "./pages/BackOfficePages/Notes";
import ScoreCard from "./pages/BackOfficePages/ScoreCard";
import Payment from "./pages/BackOfficePages/Payment";
import Product from "./pages/BackOfficePages/Product";
import CodePromo from "./pages/BackOfficePages/CodePromo";
import NotFound from "./pages/NotFound/NotFound";

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
      <Route path="users" element={<User />} />
      <Route path="events" element={<EventBackoffice />} />
      <Route path="notes" element={<Notes />} />
      <Route path="scorecard" element={<ScoreCard />} />
      <Route path="payment" element={<Payment />} />
      <Route path="product" element={<Product />} />
      <Route path="codepromo" element={<CodePromo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
