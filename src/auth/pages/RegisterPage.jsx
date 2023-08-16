import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { userStore } from "../../store/userStore";
import { isValidEmail } from "../helpers/validateEmail";
import { Layout } from "../../BlackDiamond/ui/layout/Layout";
import { apiURL } from "../../api/config";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [country, setCountry] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [colonia, setColonia] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [alert, setAlert] = useState([]);

  const setUserId = userStore((state) => state.setId);
  const setUserPhone = userStore((state) => state.setPhone);
  const setUserName = userStore((state) => state.setName);
  const setUserEmail = userStore((state) => state.setEmail);
  const setUserAdress = userStore((state) => state.setAdress)
  const setUserToken = userStore((state) => state.setToken);

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Validar campos
    if (
      password === "" ||
      password2 === "" ||
      email === "" ||
      name === "" ||
      phone === "" ||
      street === "" ||
      country === "" ||
      municipio === "" ||
      colonia === "" ||
      state === "" ||
      postalCode === ""
    ) {
      setAlert("Llene todos los campos");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    //Validar correo
    if (!isValidEmail(email)) {
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

    if (country.length <= 2) {
      setAlert("Ingrese un país válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (postalCode.length <= 2) {
      setAlert("Ingrese un código postal válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (state.length <= 2) {
      setAlert("Ingrese un estado válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (street.length < 1) {
      setAlert("Ingrese una calle válida");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (municipio.length <= 2) {
      setAlert("Ingrese un municipio válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (colonia.length <= 2) {
      setAlert("Ingrese una colonia válida");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (phone.length < 10) {
      setAlert("El numero debe de ser de al menos 10 digitos");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (password.length < 6) {
      setAlert("La contraseña debe de ser de al menos 6 caracteres");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      setPassword("");
      setPassword2("");
      return;
    }

    //Generar domicilio
    const adress = `Calle: ${street}|Colonia: ${colonia}|Municipio: ${municipio}|Estado: ${state}|CP: ${postalCode}|País: ${country}`;
    //Peticion al servidor
    try {
      const response = await axios.post(
        `${apiURL}users/register`,
        {
          name,
          phone,
          email,
          password,
          adress,
        }
      );
      const { data } = response;
      setUserId(data.id);
      setUserPhone(data.phone);
      setUserName(data.name);
      setUserEmail(data.email);
      setUserToken(data.token);
      setUserAdress(data.adress);
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
  }

  return (
    <Layout>
      <div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-fit w-11/12">
          <NavLink className="font-titles text-2xl mb-4" to={"/"}>
            BLACK DIAMOND
          </NavLink>
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-2xl xl:p-0 bg-gray-200 border-gray-400">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-black">
                Regístrate
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Tu nombre
                  </label>
                  <input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    type="text"
                    className=" border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Celular
                  </label>
                  <input
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                    type="tel"
                    className=" border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                  />
                </div>
                <p className="text-gray-800">Domicilio</p>
                <div className="flex flex-col">
                  <div>
                    <label
                      htmlFor="street"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      País
                    </label>
                    <input
                      value={country}
                      onChange={({ target }) => setCountry(target.value)}
                      type="text"
                      className=" border sm:text-sm rounded-lg  block w-full p-2.5 border-gray-600   text-gray-800"
                    />
                  </div>{" "}
                  {/*Fin de calle*/}
                  <div className="mt-4">
                    <label
                      htmlFor="number"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Código postal
                    </label>
                    <input
                      value={postalCode}
                      onChange={({ target }) => setPostalCode(target.value)}
                      type="number"
                      className="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <label
                      htmlFor="street"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Calle
                    </label>
                    <input
                      value={street}
                      onChange={({ target }) => setStreet(target.value)}
                      type="text"
                      className="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                    />
                  </div>{" "}
                  {/*Fin de calle*/}
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Municipio
                    </label>
                    <input
                      value={municipio}
                      onChange={({ target }) => setMunicipio(target.value)}
                      type="text"
                      className="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Colonia
                    </label>
                    <input
                      value={colonia}
                      onChange={({ target }) => setColonia(target.value)}
                      type="text"
                      className=" border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                    />
                  </div>{" "}
                  {/*Fin de calle*/}
                  <div className="mt-4">
                    <label
                      htmlFor="number"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Estado
                    </label>
                    <input
                      value={state}
                      onChange={({ target }) => setState(target.value)}
                      type="text"
                      className="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Tu correo
                  </label>
                  <input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className=" border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    type="password"
                    name="password"
                    id="password"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-800"
                    required={true}
                    autoComplete="false"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Confirma tu contraseña
                  </label>
                  <input
                    value={password2}
                    onChange={({ target }) => setPassword2(target.value)}
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 border-gray-600   text-gray-700"
                    required={true}
                    autoComplete="false"
                  />
                </div>
                <p className="text-red-600">{alert}</p>
                <button
                  onClick={(event) => handleSubmit(event)}
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-800 hover:bg-gray-900 focus:ring-gray-800"
                >
                  Registrarme
                </button>
                <p className="text-sm font-light text-gray-600">
                  Ya tienes una cuenta?{" "}
                  <a
                    onClick={() => navigate("/auth")}
                    className="font-medium text-primary-600 hover:underline text-darkGold cursor-pointer"
                  >
                    Inicia sesión
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
