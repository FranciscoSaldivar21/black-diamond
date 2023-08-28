import { useState } from "react";
import { NavLink } from "react-router-dom";
import { userStore } from "../../../store/userStore";
import prueba from "../../../assets/bd-prueba.png";

export const NavBar = ({image} : props) => {
  const { id } = userStore();
  const [toogleMenu, setToogleMenu] = useState(false);
  console.log(toogleMenu)

  return (
    <div className="w-full flex flex-col items-center lg:items-center lg:flex-row lg:justify-between pt-6 border-gray-200 px-16">
      <div className="absolute right-16">
        <button
          className="cursor-pointer"
          onClick={() => setToogleMenu(!toogleMenu)}
        >
          <div className="w-12 h-12 bg-background flex flex-col justify-center items-center rounded-lg">
            <div className="w-[30px] h-[20px] grid grid-rows-3 gap-1">
              <div className="bg-black h-[3px]"></div>
              <div className="bg-black h-[3px]"></div>
              <div className="bg-black h-[3px]"></div>
            </div>
          </div>
        </button>
      </div>
      <img src={prueba} className="w-36 hidden lg:block" />
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mr-16">
        {toogleMenu ? (
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
                    Iniciar sesion
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
