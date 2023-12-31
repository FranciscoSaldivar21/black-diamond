import Timer from "../components/Timer.js";
import { Footer, NavBar, WhatsApp } from "../components/index.js";

interface LayoutProps {
    children: JSX.Element,
};

export const Layout = ({ children } : LayoutProps) => {
  return (
    <div className="w-full h-full">
      <WhatsApp />
			{/* <Timer /> */}
      <div className="w-full 3xl:h-screen">
        { children }
      </div>
      <Footer />
    </div>
  );
}