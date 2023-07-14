import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../BlackDiamond/home/page/HomePage";
import { AboutPage } from "../BlackDiamond/about/page/AboutPage";
import { ContactPage } from "../BlackDiamond/contact/page/ContactPage";
import { GaleryPage } from "../BlackDiamond/galery/page/GaleryPage";
import { LogInPage } from "../auth/pages/LogInPage";
import { RegisterPage } from "../auth/pages/RegisterPage";



const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={< AboutPage/>} />
            <Route path="/galery" element={<GaleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default AppRouter