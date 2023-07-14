import { NavLink, useNavigate } from "react-router-dom";
import { userStore } from "../../store/userStore";
import { Button } from "../molecules/Button";

export const NavBar = () => {
  const { email } = userStore();
  const navigate = useNavigate();

  const handleLogIn = () => {
    console.log("Redirecting...")
    navigate('/auth')
  }


  return (
    <div className="w-full mx-auto flex justify-evenly items-center bg-black border-gray-200 px-6 py-4">
      <p className="text-white font-semibold text-xl uppercase">
        Black diamond
      </p>
      <ul className="font-medium flex p-2">
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/about"
          >
            Nosotros
          </NavLink>
        </li>
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/galery"
          >
            Galería
          </NavLink>
        </li>
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/contact"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
      {email === "" ? (
        <Button
          title="Iniciar sesión"
          bgColor="darkGold"
          textColor="white"
          onPress={handleLogIn}
        />
      ) : (
        ""
      )}
    </div>
  );
};
