import { Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, GaleryPage, ContactPage } from "../BlackDiamond/pages";



const AppRouter = () => {
    return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={< AboutPage/>} />
        <Route path="/galery" element={<GaleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
    )
}

export default AppRouter