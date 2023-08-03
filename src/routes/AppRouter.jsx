import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../BlackDiamond/home/page/HomePage";
import { AboutPage } from "../BlackDiamond/about/page/AboutPage";
import { ContactPage } from "../BlackDiamond/contact/page/ContactPage";
// import { GaleryPage } from "../BlackDiamond/galery/page/GaleryPage";
import { LogInPage } from "../auth/pages/LogInPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { userStore } from "../store/userStore";
import { UserPage } from "../BlackDiamond/user/page/UserPage";
import { GiveawaysPage } from "../BlackDiamond/giveaways/page/GiveawaysPage";
import { GiveawayPage } from "../BlackDiamond/giveaways/page/GiveawayPage";
import { SalePage } from "../BlackDiamond/sales/page/SalePage";
import { SalesPage } from "../BlackDiamond/sales/page/SalesPage";
import { IForgotMyPassword } from "../auth/pages/IForgotMyPasswordPage";



const AppRouter = () => {
    const id = userStore((state) => state.id);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={ id === null ? <LogInPage /> : <Navigate to={"/"} /> } />
            <Route path="/register" element={ id === null ? <RegisterPage /> : <Navigate to={"/"} /> } />
            <Route path="/iforgotmypassword" element={ id === null ? < IForgotMyPassword/> : <Navigate to={"/"} /> } />
            <Route path="/about" element={< AboutPage/>} />
            {/* <Route path="/galery" element={<GaleryPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/user" element={ id === null ? <Navigate to={"/"} /> : <UserPage /> } />
            <Route path="/giveaways" element={ <GiveawaysPage /> } />
            <Route path="/mySales" element={ <SalesPage /> } />
            <Route path="/giveaway/:id" element={ <GiveawayPage /> } />
            <Route path="/sale" element={ <SalePage /> } />
            <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default AppRouter