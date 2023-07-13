import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center bg-black border-gray-200 px-6 py-4">
      <p className="text-white font-semibold text-xl uppercase">
        Black diamond
      </p>
      <ul className="font-medium flex p-2 border border-gray-900 rounded-lg bg-gray-900">
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink className={({isActive}) => (isActive ? 'text-darkGold' : '')} to="/">Inicio</NavLink>
        </li>
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink className={({isActive}) => (isActive ? 'text-darkGold' : '')} to="/about">Nosotros</NavLink>
        </li>
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink className={({isActive}) => (isActive ? 'text-darkGold' : '')} to="/galery">Galería</NavLink>
        </li>
        <li className="block mx-4 pl-3 text-white rounded hover:text-lightGold">
          <NavLink className={({isActive}) => (isActive ? 'text-darkGold' : '')} to="/contact">Contacto</NavLink>
        </li>
      </ul>
    </div>
  );
};
