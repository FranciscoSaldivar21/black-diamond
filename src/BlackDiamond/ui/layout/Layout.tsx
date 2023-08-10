import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { WhatsApp } from "../components/WhatsApp";

interface LayoutProps {
    children: JSX.Element,
};

export const Layout = ({ children } : LayoutProps) => {
  return (
    <div className="w-full bg-background">
      <NavBar />
      <WhatsApp />
      <div className="w-full mb-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}