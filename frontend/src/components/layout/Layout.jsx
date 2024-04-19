/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="border bottom-4 border-red-500">
      <Header />
      <main className="relative font-secondary_font min-h-[calc(100vh-415px)] grid place-items-center bg-gradient-to-b from-background-color-second to-background-color-first">
        {children}
      </main>
      <Footer />
    </div>
  );
}
