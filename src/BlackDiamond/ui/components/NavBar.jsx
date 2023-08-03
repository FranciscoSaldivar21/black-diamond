import { NavLink, useNavigate } from "react-router-dom";
import { userStore } from "../../../store/userStore";
import { Button } from "../../molecules/Button";

export const NavBar = () => {
  const { id, name } = userStore();
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/auth')
  }


  return (
    <div className="bg-navBar bg-cover bg-no-repeat w-full mx-auto flex justify-end items-center h-36 border-gray-200 px-6 py-4">
      <ul className="font-medium flex p-2 pr-20">
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
        {
          id !== null
          ? <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
              <NavLink
                className={({ isActive }) => (isActive ? "text-darkGold" : "")}
                to="/mySales"
              >
                Mis compras
              </NavLink>
            </li>
            : ""
        }
      </ul>
      <div className="pr-12">
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
    </div>
  );
};
