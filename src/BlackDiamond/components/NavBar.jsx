import { NavLink } from "react-router-dom";
import { TfiCamera } from "react-icons/tfi";
import { GrContactInfo } from "react-icons/gr";

export const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center w-full bg-black animate-fade-down animate-once animate-duration-500 animate-delay-700 animate-ease-linear">
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
          className="flex align-middle content-center font-navBarTexts font-bold uppercase w-32 px-5 py-3 text-center text-background hover:-translate-y-1 hover:scale-110"
          to="/galery"
        >
          <div className="pr-2">
            <TfiCamera size={25}/>
          </div>
          Galería
        </NavLink>
        <NavLink
          className="font-navBarTexts font-bold uppercase w-32 px-5 py-3 text-center text-background hover:-translate-y-1 hover:scale-110"
          to="/contact"
        >
          <div className="pr-2">
            <GrContactInfo style={{color: 'white'}}/>
          </div>
          Contacto
        </NavLink>
      </ul>
    </div>
  );
}
