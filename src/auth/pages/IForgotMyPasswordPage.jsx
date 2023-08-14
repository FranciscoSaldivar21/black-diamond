import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { isValidEmail } from "../helpers/validateEmail";
import { Layout } from "../../BlackDiamond/ui/layout/Layout";
import { apiURL } from "../../api/config";

export const IForgotMyPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [alert, setAlert] = useState("");
  const [alertConfirm, setAlertConfirm] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Validar campos
    if (email === "") {
      setAlert("Escribe un correo electrónico");
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
      const response = await axios.get(
        `${apiURL}users/forgotPassword/${email}`
      );
      console.log(response);

      setAlertConfirm("Se ha enviado un correo electrónico con tu contraseña");
      setTimeout(() => {
        setAlertConfirm("");
        navigate("/auth");
      }, 4000);
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
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-fit lg:py-0 mb-20 mt-8">
          <NavLink className="font-titles text-2xl mb-4" to={"/"}>
            BLACK DIAMOND
          </NavLink>
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-200 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-black">
                Ingresa el email registrado a tu cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Tu correo
                  </label>
                  <input
                    onChange={({ target }) => setEmail(target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className=" border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-600 text-gray-800"
                    placeholder="name@mail.com"
                    required=""
                  />
                </div>
                <p className="text-red-600">{alert}</p>
                <p className="text-green-500">{alertConfirm}</p>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
