import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="relative font-secondary_font min-h-[calc(100vh-587px)] grid place-items-center bg-gradient-to-b from-background-color-second to-background-color-first">
        {children}
      </main>
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
