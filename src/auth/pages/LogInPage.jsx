import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { isValidEmail } from "../helpers/validateEmail";
import { userStore } from "../../store/userStore";
import { Layout } from "../../BlackDiamond/ui/layout/Layout";
import { apiURL } from "../../api/config";

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
      const response = await axios.post(
        `${apiURL}users/auth`,
        {
          email,
          password,
        }
      );
      const { data } = response;

      setUserId(data.id);
      setUserName(data.name);
      setUserEmail(data.email);
      setUserAdress(data.adress);
      setUserToken(data.token);
      setUserPhone(data.phone)
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
      <div>
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-fit lg:py-0 mt-6">
          <NavLink className="font-titles font-bold text-2xl mb-4" to={"/"}>
            BLACK DIAMOND
          </NavLink>
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-200 border-gray-400">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-semibold font-subTitles leading-tight tracking-tight md:text-2xl text-black">
                Inicia sesión en tu cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-700 font-semibold"
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
                    className="block mb-2 text-sm text-gray-700 font-semibold"
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
                    className="text-sm text-black-600 font-semibold hover:underline text-darkGold"
                  >
                    Olvidaste tu contraseña?
                  </NavLink>
                </div>
                <p className="text-red-600">{alert}</p>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-800"
                >
                  Iniciar sesión
                </button>
                <p className="text-sm font-light text-gray-600">
                  Aún no tienes una cuenta?{" "}
                  <a
                    onClick={() => navigate("/register")}
                    className="font-semibold text-primary-600 hover:underline text-darkGold cursor-pointer"
                  >
                    Regístrate
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
