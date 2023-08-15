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
    <div className="w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-6 bg-gray-100 rounded-lg border border-gray-200">
      <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold font-subTitles text-center text-gray-900">
          Contactanos para mas información
        </h2>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg text-gray-900 font-semibold"
            >
              Tu correo
            </label>
            <input
              type="email"
              id="email"
              className="placeholder-slate-500 text-gray-900 border border-gray-500 text-sm rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="mail@mail.com"
              value={email}
              onChange={({target}) => setEmail(target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-lg text-gray-900 font-semibold"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              className="placeholder-slate-500 text-gray-900 border border-gray-500 text-sm rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="¿Cómo podemos ayudarte?"
              required
              value={subject}
              onChange={({target}) => setSubject(target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-lg text-gray-900 font-semibold"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              rows="6"
              value={message}
              className="placeholder-slate-500 text-gray-900 border border-gray-500 text-sm rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Deja un comentario..."
              onChange={({target}) => setMessage(target.value)}
            ></textarea>
          </div>
          <p className="text-red-500 font-normal">{alert}</p>
          <p className="text-green-500 font-normal">{successAlert}</p>
          <button
            onClick={(event) => handleSubmit(event)}
            type="submit"
            className="w-full font-semibold  bg-primary-600 hover:bg-lightGold focus:ring-4 focus:outline-none focus:ring-primary-300 hover:font-bold rounded-lg text-sm px-5 py-2.5 text-center bg-darkGold text-black"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
