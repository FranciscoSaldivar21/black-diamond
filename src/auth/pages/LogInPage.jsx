import { useState } from "react";
import axios from "axios";

import { isValidEmail } from "../helpers/validateEmail";
import { userStore } from "../../store/userStore";
import { Layout } from "../../BlackDiamond/ui/layout/Layout";
import { apiURL } from "../../api/config";
import { NavBar } from "../../BlackDiamond/ui/components";
import logo from "../../assets/logo-menu.png"
import { LogInForm } from "../components/LogInForm";

export const LogInPage = () => {
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
      <NavBar title={"LOGIN"} image={"bg-navBarLogIn"} />
      <div className="lg:relative lg:h-80 lg:bottom-32 flex flex-col items-center justify-center px-6 mx-auto py-8 lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-zinc-800">
          <div className="p-6 space-y-3 md:space-y-4 sm:p-8">
            <img className="px-16" src={logo} />
            <LogInForm
              setEmail={setEmail}
              setPassword={setPassword}
              setAlert={setAlert}
              handleSubmit={handleSubmit}
              alert={alert}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
