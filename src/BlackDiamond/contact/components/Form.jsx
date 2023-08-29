import { useState } from "react";
import { isValidEmail } from "../../../auth/helpers/validateEmail";
import axios from "axios";
import { apiURL } from "../../../api/config";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [successAlert, setSuccessAlert] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!isValidEmail(email)){
      setAlert("Ingresa un correo válido");
      setTimeout(() => {
        setAlert("");
      }, 4000)
      return;
    }

    if(email === "" || subject === "" || message === ""){
      setAlert("Por favor llena todos los campos");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }
    
    const form = new FormData();
    form.append("email", email);
    form.append("subject", subject);
    form.append("message", message);

    try {
      const { data } = await axios.post(`${apiURL}contact`, form);
      setSuccessAlert(data.msg);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setAlert("Ocurrió un error inesperado, intenta de nuevo mas tarde");
    }
  } 

  return (
    <div className="py-8 w-full justify-center flex flex-col items-center">
      <h2 className="w-9/12 text-xl lg:w-7/12 lg:text-2xl uppercase py-2.5 px-10 text-center bg-lightGold rounded-2xl font-bold">
        Contactanos para mas información
      </h2>
      <div className="pt-6 mx-auto w-11/12 lg:w-4/6">
        <form className="space-y-4">
          <div className="w-full flex flex-col md:flex-row justify-between gap-4">
            <input
              type="text"
              id="name"
              className="placeholder-slate-500 text-gray-900 border border-gray-500 text-md rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Nombre"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
            <input
              type="number"
              id="phone"
              className="placeholder-slate-500 text-gray-900 border border-gray-500 text-md rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Teléfono"
              required
              value={subject}
              onChange={({ target }) => setSubject(target.value)}
            />
            <input
              type="email"
              id="email"
              className="placeholder-slate-500 text-gray-900 border border-gray-500 text-md rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Correo"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </div>
          <textarea
            id="message"
            rows="6"
            value={message}
            className="placeholder-slate-500 text-gray-900 border border-gray-500 text-md rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 w-full p-2.5"
            placeholder="Déjanos tu comentario..."
            onChange={({ target }) => setMessage(target.value)}
          ></textarea>
          <p className="text-red-500 font-normal">{alert}</p>
          <p className="text-green-500 font-normal">{successAlert}</p>
          <div className="flex justify-end">
            <button
              onClick={(event) => handleSubmit(event)}
              type="submit"
              className="uppercase w-full md:w-auto text-md font-semibold  bg-primary-600 hover:bg-lightGold focus:ring-4 focus:outline-none focus:ring-primary-300 hover:font-bold rounded-lg px-5 py-2.5 text-center bg-lightGold text-black"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
