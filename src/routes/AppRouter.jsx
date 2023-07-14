import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../BlackDiamond/home/page/HomePage";
import { AboutPage } from "../BlackDiamond/about/page/AboutPage";
import { ContactPage } from "../BlackDiamond/contact/page/ContactPage";
import { GaleryPage } from "../BlackDiamond/galery/page/GaleryPage";
import { LogInPage } from "../auth/pages/LogInPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { userStore } from "../store/userStore";



const AppRouter = () => {
    const id = userStore((state) => state.id);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={ id === null ? <LogInPage /> : <Navigate to={"/"} /> } />
            <Route path="/register" element={ id === null ? <RegisterPage /> : <Navigate to={"/"} /> } />
            <Route path="/about" element={< AboutPage/>} />
            <Route path="/galery" element={<GaleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default AppRouter