import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoBlanco from "../../../assets/black-diamond-blanco.png";
import { NavBarOptions } from "./NavBarOptions";
import classnames from "tailwindcss-classnames";
import { userStore } from "../../../store/userStore";


const defaultTitle = "";
export const NavBar = ({ image = "bg-navBarHome", title = defaultTitle }: props) => {
  const toogle = userStore((state) => state.toogle);
  const setToogle = userStore((state) => state.setToogle);
	const elementClass = classnames(image, "bg-center bg-cover h-96 lg:h-[580px]");

  return (
    <div className={elementClass}>
      <div className="w-full flex flex-col items-center lg:items-center lg:flex-row lg:justify-between pt-6 border-gray-200 px-16">
        <div className="absolute right-3 lg:right-16" onClick={() => setToogle(!toogle)}>
          <button
            className="cursor-pointer"
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
        <img src={logoBlanco} className="w-36 hidden lg:block" />
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:mr-16">
          <NavBarOptions/>
        </div>
      </div>
      <div className="absolute w-[200px] lg:w-[500px] left-4 top-8 lg:top-[450px] md:left-32 pl-4 border-l-2 border-lightGold">
        <p className="text-white uppercase text-3xl lg:text-5xl font-bold">{ title }</p>
      </div>
    </div>
  );
};
