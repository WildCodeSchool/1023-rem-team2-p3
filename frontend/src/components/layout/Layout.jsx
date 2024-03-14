import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import StarsCanvas from "../Stars/Stars";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="relative font-secondary_font min-h-[calc(100vh-415px)] flex flex-wrap justify-center bg-gradient-to-b from-background-color-second to-background-color-first">
        <StarsCanvas />
        {children}
      </main>
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
