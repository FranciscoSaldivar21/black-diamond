import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { isValidEmail } from "../helpers/validateEmail";
import { userStore } from "../../store/userStore";
import { Layout } from "../../BlackDiamond/ui/layout/Layout";
import { apiURL } from "../../api/config";
import { NavBar } from "../../BlackDiamond/ui/components";
import logo from "../../assets/logo-menu.png"

export const LogInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alert, setAlert] = useState("");

  const setUserId = userStore((state) => state.setId);
  const setUserName = userStore((state) => state.setName);
  const setUserEmail = userStore((state) => state.setEmail);
  const setUserToken = userStore((state) => state.setToken);
  const setUserAdress = userStore((state) => state.setAdress);
  const setUserPhone = userStore((state) => state.setPhone);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Validar campos
    if (password === "" || email === "") {
      setAlert("Llene todos los campos");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    //Validar correo
    if (!isValidEmail(email)) {
      setAlert("Ingresa un email válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    //Peticion al servidor
    try {
      const response = await axios.post(`${apiURL}users/auth`, {
        email,
        password,
      });
      const { data } = response;

      setUserId(data.id);
      setUserName(data.name);
      setUserEmail(data.email);
      setUserAdress(data.adress);
      setUserToken(data.token);
      setUserPhone(data.phone);
    } catch (error) {
      if (error) {
        const errorMessage = error.response.data.error;
        setAlert(errorMessage);
        setTimeout(() => {
          setAlert("");
        }, 4000);
      }
      return;
    }
  };
  return (
    <Layout>
      <NavBar />
      <div className="relative bottom-60 flex flex-col items-center justify-center px-6 mx-auto">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-zinc-700">
          <div className="p-6 space-y-3 md:space-y-4 sm:p-8">
            <img className="px-16" src={logo}/>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-md text-lightGold font-bold"
                >
                  Tu correo
                </label>
                <input
                  onChange={({ target }) => setEmail(target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className=" border sm:text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-600 text-gray-700"
                  placeholder="name@mail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-md text-lightGold font-bold"
                >
                  Contraseña
                </label>
                <input
                  onChange={({ target }) => setPassword(target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-gray-700"
                  required={true}
                  autoComplete="false"
                />
              </div>
              <div className="flex items-center justify-between">
                <NavLink
                  to={"/iforgotmypassword"}
                  className="text-sm text-black-600 font-semibold hover:underline text-lightGold"
                >
                  Olvidaste tu contraseña?
                </NavLink>
              </div>
              <p className="text-red-600">{alert}</p>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-black font-bold bg-primary-600 rounded-lg text-sm px-5 py-2.5 text-center bg-lightGold"
              >
                Iniciar sesión
              </button>
              <p className="text-sm font-light text-gray-100">
                Aún no tienes una cuenta?{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="font-semibold text-primary-600 hover:underline text-lightGold cursor-pointer"
                >
                  Regístrate
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
