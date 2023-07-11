import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center w-full bg-black">
      <div>
        <p className="text-white">Logo de la empresa</p>
      </div>
      <ul className="flex justify-evenly">
        <NavLink className="uppercase w-32 px-5 py-3 text-center text-slate-50 hover:text-black hover:bg-amber-500" to='/'>Inicio</NavLink>
        <NavLink className="uppercase w-32 px-5 py-3 text-center text-slate-50 hover:text-black hover:bg-amber-500" to='/about'>Nosotros</NavLink>
        <NavLink className="uppercase w-32 px-5 py-3 text-center text-slate-50 hover:text-black hover:bg-amber-500" to='/galery'>Galería</NavLink>
        <NavLink className="uppercase w-32 px-5 py-3 text-center text-slate-50 hover:text-black hover:bg-amber-500" to='/contact'>Contacto</NavLink>
      </ul>
    </div>
  )
}
