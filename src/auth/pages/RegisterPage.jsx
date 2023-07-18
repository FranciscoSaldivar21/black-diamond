import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { userStore } from "../../store/userStore";
import { isValidEmail } from "../helpers/validateEmail";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [alert, setAlert] = useState('');

  const setUserId = userStore((state) => state.setId);
  const setUserName = userStore((state) => state.setName);
  const setUserEmail = userStore((state) => state.setEmail);
  const setUserToken = userStore((state) => state.setToken);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Validar campos
    if(password === '' || password2 === '' || email === '' || name === ''){
      setAlert("Llene todos los campos");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    //Validar correo
    if(!isValidEmail(email)){
      setAlert("Email inválido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    //Validar contraseña
    if (password !== password2) {
      setAlert("Las contraseñas no coinciden");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    //Peticion al servidor
    try {
      const response = await axios.post("http://localhost:3000/api/users/register", {
      name,
      email,
      password
    });
      const { data } = response;
      setUserId(data.id);
      setUserName(data.name);
      setUserEmail(data.email);
      setUserToken(data.token);
    } catch (error) {
      if(error){
        const errorMessage = error.response.data.error;
        setAlert(errorMessage);
        setTimeout(() => {
          setAlert("");
        }, 4000);
      }
      return;
    }
  }

  return (
    <div className="bg-lightGray">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <NavLink className="font-titles text-2xl mb-4" to={"/"}>
          BLACK DIAMOND
        </NavLink>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Regístrate
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Tu nombre
                </label>
                <input
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Juan Perez"
                  required={true}
                  minLength={10}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Tu correo
                </label>
                <input
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@mail.com"
                  required={true}
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
                  value={password}
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
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Confirma tu contraseña
                </label>
                <input
                  value={password2}
                  onChange={({ target }) => setPassword2(target.value)}
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required={true}
                  autoComplete="false"
                />
              </div>
              <p className="text-red-600">{alert}</p>
              <button
                onClick={(event) => handleSubmit(event)}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-800"
              >
                Registrarme
              </button>
              <p className="text-sm font-light text-gray-400">
                Ya tienes una cuenta?{" "}
                <a
                  onClick={() => navigate("/auth")}
                  className="font-medium text-primary-600 hover:underline text-gray-200 cursor-pointer"
                >
                  Inicia sesión
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
