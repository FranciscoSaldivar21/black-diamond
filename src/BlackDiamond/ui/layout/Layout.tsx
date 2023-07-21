import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { WhatsApp } from "../components/WhatsApp";

interface LayoutProps {
    children: JSX.Element,
};

export const Layout = ({ children } : LayoutProps) => {
  return (
    <div className="w-full">
      <NavBar />
      <WhatsApp />
      <div className="w-full mt-12">
        {children}
      </div>
      <Footer />
    </div>
  );
}