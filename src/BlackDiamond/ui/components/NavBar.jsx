import { NavLink, useNavigate } from "react-router-dom";
import { userStore } from "../../../store/userStore";
import { Button } from "../../molecules/Button";
import logo from "../../../assets/black_diamond_blanco.png";

export const NavBar = () => {
  const { id, name } = userStore();
  const navigate = useNavigate();

  const handleLogIn = () => {
    console.log("Redirecting...")
    navigate('/auth')
  }


  return (
    <div className="w-full mx-auto flex justify-evenly items-center bg-black border-gray-200 px-6 py-4">
      <div className="flex justify-center items-center">
        <img
          className="w-12 mr-4"
          src={logo}
        />
        <p className="text-white font-semibold text-xl uppercase">
          Black diamond
        </p>
      </div>
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
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/giveaways"
          >
            Sorteos
          </NavLink>
        </li>
      </ul>
      {id === null ? (
        <Button
          title="Iniciar sesión"
          bgColor="darkGold"
          textColor="white"
          onPress={handleLogIn}
        />
      ) : (
        <NavLink className="text-white hover:font-bold" to="user">
          {name}
        </NavLink>
      )}
    </div>
  );
};
