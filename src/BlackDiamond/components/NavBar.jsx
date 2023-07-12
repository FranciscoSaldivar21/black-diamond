import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center w-full bg-black">
      <div>
        <p className="text-white">Logo de la empresa</p>
      </div>
      <ul className="flex justify-evenly">
        <NavLink
          className="font-navBarTexts font-bold uppercase w-32 px-5 py-3 text-center text-background hover:-translate-y-1 hover:scale-110"
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className="font-navBarTexts font-bold uppercase w-32 px-5 py-3 text-center text-background hover:-translate-y-1 hover:scale-110"
          to="/about"
        >
          Nosotros
        </NavLink>
        <NavLink
          className="font-navBarTexts font-bold uppercase w-32 px-5 py-3 text-center text-background hover:-translate-y-1 hover:scale-110"
          to="/galery"
        >
          Galería
        </NavLink>
        <NavLink
          className="font-navBarTexts font-bold uppercase w-32 px-5 py-3 text-center text-background hover:-translate-y-1 hover:scale-110"
          to="/contact"
        >
          Contacto
        </NavLink>
      </ul>
    </div>
  );
}
