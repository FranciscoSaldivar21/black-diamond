import { Route, Routes } from "react-router-dom";
import { HomePage } from "../BlackDiamond/home/page/HomePage";
import { AboutPage } from "../BlackDiamond/about/page/AboutPage";
import { ContactPage } from "../BlackDiamond/contact/page/ContactPage";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={< AboutPage/>} />
            {/* <Route path="/galery" element={<GaleryPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    )
}

export default AppRouter