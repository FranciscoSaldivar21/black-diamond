import { useState } from "react";
import { apiURL } from "../../../api/config";
import { UpdateUserForm } from "../moleculs/UpdateUserForm";
import { userStore } from "../../../store/userStore";
import { isValidEmail } from "../../../auth/helpers/validateEmail";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UpdateUser = ({ setEdit }) => {
	const navigate = useNavigate();
  const id = userStore((state) => state.id);
  const token = userStore((state) => state.token);
	const saveName = userStore((state) => state.setName);
	const saveEmail = userStore((state) => state.setEmail);
	const saveAdress = userStore((state) => state.setAdress);
	const savePhone = userStore((state) => state.setPhone);

	const [alert, setAlert] = useState("");
  const initailName = userStore((state) => state.name);
  const initailEmail = userStore((state) => state.email);
  const initailPhone = userStore((state) => state.phone);
  const adress = userStore((state) => state.adress).split("|");
  const [name, setName] = useState(initailName);
  const [email, setEmail] = useState(initailEmail);
  const [phone, setPhone] = useState(initailPhone);
  const [street, setStreet] = useState(adress[0].split(": ")[1]);
  const [colonia, setColonia] = useState(adress[1].split(": ")[1]);
  const [municipio, setMunicipio] = useState(adress[2].split(": ")[1]);
  const [state, setState] = useState(adress[3].split(": ")[1]);
  const [postalCode, setPostalCode] = useState(adress[4].split(": ")[1]);
  const [country, setCountry] = useState(adress[5].split(": ")[1]);

  const submitChanges = async () => {
    //Validar campos
    if (
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

    //Generar domicilio
    const adressAux = `Calle: ${street}|Colonia: ${colonia}|Municipio: ${municipio}|Estado: ${state}|CP: ${postalCode}|País: ${country}`;
    try {
					const res = await axios.put(
            `${apiURL}users/${id}`,
            {
              name: name,
              phone: phone,
              email: email,
              adress: adressAux,
            },
            {
              headers: {
                "x-token": token,
              },
            }
          );

					console.log(res);
					saveName(name);
					saveEmail(email);
					savePhone(phone);
					saveAdress(adressAux);
					navigate(0);
		} catch (error) {
			console.log(error);
			setAlert("El correo ya existe en otra cuenta");
			setTimeout(() => {
				setAlert("");
			}, 4000);
		}
  };
  return (
    <div>
      <UpdateUserForm
				name={name}
				email={email}
				phone={phone}
				street={street}
				colonia={colonia}
				municipio={municipio}
				state={state}
				postalCode={postalCode}
				country={country}
        setColonia={setColonia}
        setName={setName}
        setCountry={setCountry}
        setEmail={setEmail}
        setMunicipio={setMunicipio}
        setStreet={setStreet}
        setPhone={setPhone}
        setPostalCode={setPostalCode}
        setState={setState}
      />
			<p className="text-red-500 text-lg font-semibold mt-2 text-left md:text-right">{alert}</p>
      <div className="flex md:flex-row flex-col justify-end md:space-x-4 md:space-y-0 space-y-2 mt-4">
        <button
          onClick={submitChanges}
          className="text-black uppercase text-lg md:text-xl py-2 px-8 bg-lightGray rounded-md md:w-64"
        >
          Actualizar
        </button>
        <button
          onClick={() => setEdit(false)}
          className="text-white uppercase text-lg md:text-xl py-2 px-6 bg-red-600 rounded-md md:w-64"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
