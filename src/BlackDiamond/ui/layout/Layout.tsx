import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { WhatsApp } from "../components/WhatsApp";

interface LayoutProps {
    children: JSX.Element,
};

export const Layout = ({ children } : LayoutProps) => {
  return (
    <div className="w-full h-full">
      <NavBar />
      <WhatsApp />
      <div className="w-full mb-8 3xl:h-screen">
        { children }
      </div>
      <Footer />
    </div>
  );
}