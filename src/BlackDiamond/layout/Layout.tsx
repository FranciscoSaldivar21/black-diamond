import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

import { WhatsApp } from "../components/WhatsApp";

interface LayoutProps {
    children: JSX.Element,
};

export const Layout = ({ children } : LayoutProps) => {
  return (
    <div className="container w-full mx-auto">
      <NavBar />
      <WhatsApp />
      <div className="container w-4/5 mx-auto mt-12">
        {children}
      </div>
      <Footer />
    </div>
  );
}