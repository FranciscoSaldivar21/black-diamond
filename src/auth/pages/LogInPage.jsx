import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { isValidEmail } from "../helpers/validateEmail";
import { userStore } from "../../store/userStore";

export const LogInPage = () => {
  const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [alert, setAlert] = useState("");

    const setUserId = userStore((state) => state.setId);
    const setUserName = userStore((state) => state.setName);
    const setUserEmail = userStore((state) => state.setEmail);
    const setUserToken = userStore((state) => state.setToken);

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
      const response = await axios.post(
        "http://localhost:3000/api/users/auth",
        {
          email,
          password,
        }
      );
      const { data } = response;
      console.log(data);
      setUserId(data.id);
      setUserName(data.name);
      setUserEmail(data.email);
      setUserToken(data.token);
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
    <div className="bg-lightGray">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <NavLink className="font-titles text-2xl mb-4" to={"/"}>
          BLACK DIAMOND
        </NavLink>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Inicia sesión en tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Tu correo
                </label>
                <input
                  onChange={({ target }) => setEmail(target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@mail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Contraseña
                </label>
                <input
                  onChange={({ target }) => setPassword(target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required={true}
                  autoComplete="false"
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-black-600 hover:underline text-white"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
              <p className="text-red-600">{alert}</p>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800"
              >
                Iniciar sesión
              </button>
              <p className="text-sm font-light text-gray-400">
                Aún no tienes una cuenta?{" "}
                <a
                  onClick={() => navigate("/register")}
                  className="font-medium text-primary-600 hover:underline text-gray-200 cursor-pointer"
                >
                  Regístrate
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <button>Regresar</button>
    </div>
  );
};
