import { NavLink } from "react-router-dom";
import { userStore } from "../../../store/userStore";

export const NavBar = () => {
  const { id } = userStore();


  return (
    <div className="bg-zinc-900 md:bg-navBar md:bg-cover md:bg-no-repeat w-full flex justify-center md:justify-end md:h-28 lg:h-32 xl:h-36 h-50 border-gray-200 px-6 py-4">
      <ul className="flex flex-col items-center md:flex-row p-2 lg:pr-10 lg:ml-20 font-navBarTexts font-bold text-md uppercase">
        <li className="block mx-4 mt-2 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/"
          >
            Inicio
          </NavLink>
        </li>
        <li className="block mx-4 mt-2 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/about"
          >
            Nosotros
          </NavLink>
        </li>
        <li className="block mx-4 mt-2 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/contact"
          >
            Contacto
          </NavLink>
        </li>
        <li className="block mx-4 mt-2 text-white rounded hover:text-lightGold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-darkGold" : "")}
            to="/giveaways"
          >
            Sorteos
          </NavLink>
        </li>
        {id !== null ? (
          <li className="block mx-4 mt-2 text-white rounded hover:text-lightGold">
            <NavLink
              className={({ isActive }) => (isActive ? "text-darkGold" : "")}
              to="/mySales"
            >
              Mis compras
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {id !== null ? (
          <li className="block mx-4 mt-2 text-white rounded hover:font-bold">
            <NavLink
              className={({ isActive }) => (isActive ? "text-darkGold" : "")}
              to="/user"
            >
              Mi usuario
            </NavLink>
          </li>
        ) : (
          <li className="block mx-4 mt-2 text-white rounded hover:font-bold px-3 py-0 pt-1.5 pb-1 bg-darkGold">
            <NavLink
              className={({ isActive }) => (isActive ? "text-white" : "")}
              to="/auth"
            >
              Iniciar sesion
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};
