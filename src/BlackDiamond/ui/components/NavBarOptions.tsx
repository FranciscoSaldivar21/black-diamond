import { NavLink } from "react-router-dom";
import { userStore } from '../../../store/userStore';

export const NavBarOptions = () => {
  const { id } = userStore();
  const toogle = userStore((state) => state.toogle);

  return (
    toogle ? (
      <div className="flex flex-col lg:flex-row">
        <ul className="mt-16 lg:mt-0 animate-fade-left animate-once animate-duration-800 flex flex-col items-center lg:flex-row p-2 font-navBarTexts font-bold text-md uppercase">
          <li className="text-xl font-bold block mx-4 mt-2 text-white rounded hover:text-lightGold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-darkGold" : ""
              }
              to="/"
            >
              Inicio
            </NavLink>
          </li>
          <li className="text-xl font-bold block mx-4 mt-2 text-white rounded hover:text-lightGold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-darkGold" : ""
              }
              to="/about"
            >
              Nosotros
            </NavLink>
          </li>
          <li className="text-xl font-bold block mx-4 mt-2 text-white rounded hover:text-lightGold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-darkGold" : ""
              }
              to="/contact"
            >
              Contacto
            </NavLink>
          </li>
          <li className="text-xl font-bold block mx-4 mt-2 text-white rounded hover:text-lightGold">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-darkGold" : ""
              }
              to="/giveaways"
            >
              Sorteos
            </NavLink>
          </li>
          {id !== null ? (
            <li className="text-xl font-bold block mx-4 mt-2 text-white rounded hover:text-lightGold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-darkGold" : ""
                }
                to="/mySales"
              >
                Mis compras
              </NavLink>
            </li>
          ) : (
            ""
          )}
          {id !== null ? (
            <li className="text-xl font-bold block mx-4 mt-2 text-white rounded hover:font-bold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-darkGold" : ""
                }
                to="/user"
              >
                Mi usuario
              </NavLink>
            </li>
          ) : (
            <li className="text-xl font-bold block mx-4 mt-2 text-white rounded hover:font-bold px-3 py-0 pt-1.5 pb-1 bg-darkGold">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to="/auth"
              >
                LogIn
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    ) : (
      ""
    )
  )
}
