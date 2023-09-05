import { useEffect, useState } from "react";
import { userStore } from "../../../store/userStore";
import axios from "axios";
import { Layout } from "../../ui/layout/Layout";
import { isValidEmail } from "../../../auth/helpers/validateEmail";
import { apiURL } from "../../../api/config";
import { NavBar } from "../../ui/components";
import { UserInformation } from "../components/UserInformation";
import { UpdateUserForm } from "../components/UpdateUserForm";

export const UserPage = () => {
	const [edit, setEdit] = useState(false);

  const id = userStore((state) => state.id);
  const name = userStore((state) => state.name);
  const email = userStore((state) => state.email);
  const phone = userStore((state) => state.phone);
  const adress = userStore((state) => state.adress);
  const token = userStore((state) => state.token);
  const adress2 = adress.split("|");
  const setUserPhone = userStore((state) => state.setPhone);
  const setUserName = userStore((state) => state.setName);
  const setUserEmail = userStore((state) => state.setEmail);
  const setUserAdress = userStore((state) => state.setAdress);

  const [alert, setAlert] = useState("");

  //It is for new values for adress
  const [newName, setNewName] = useState(name);
  const [newPhone, setNewPhone] = useState(phone);
  const [newEmail, setNewEmail] = useState(email);
  const [newCountry, setNewCountry] = useState();
  const [newState, setNewState] = useState();
  const [newMunicipio, setNewMunicipio] = useState();
  const [newStreet, setNewStreet] = useState();
  const [newColonia, setNewColonia] = useState();
  const [newPostalCode, setNewPostalCode] = useState();

  useEffect(() => {
    setNewStreet(adress2[0].split(": ")[1]);
    setNewColonia(adress2[1].split(": ")[1]);
    setNewMunicipio(adress2[2].split(": ")[1]);
    setNewState(adress2[3].split(": ")[1]);
    setNewPostalCode(adress2[4].split(": ")[1]);
    setNewCountry(adress2[5].split(": ")[1]);
  }, [edit]);

  const handleButonEditPress = () => setEdit(!edit);

  const handleSubmitChanges = async () => {
    //Validar campos
    if (
      newEmail === "" ||
      newName === "" ||
      newPhone === "" ||
      newStreet === "" ||
      newCountry === "" ||
      newMunicipio === "" ||
      newColonia === "" ||
      newState === "" ||
      newPostalCode === ""
    ) {
      setAlert("Llene todos los campos");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    //Validar correo
    if (!isValidEmail(newEmail)) {
      setAlert("Email inválido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (newCountry.length <= 2) {
      setAlert("Ingrese un país válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (newPostalCode.length <= 2) {
      setAlert("Ingrese un código postal válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (newState.length <= 2) {
      setAlert("Ingrese un estado válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (newStreet.length < 1) {
      setAlert("Ingrese una calle válida");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (newMunicipio.length <= 2) {
      setAlert("Ingrese un municipio válido");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (newColonia.length <= 2) {
      setAlert("Ingrese una colonia válida");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    if (newPhone.length < 10) {
      setAlert("El numero debe de ser de al menos 10 digitos");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }

    const { status } = await axios.put(
      `${apiURL}users/${id}`,
      {
        name: newName,
        phone: newPhone,
        email: newEmail,
        adress: `Calle: ${newStreet}|Colonia: ${newColonia}|Municipio: ${newMunicipio}|Estado: ${newState}|CP: ${newPostalCode}|País: ${newCountry}`,
      },
      {
        headers: {
          "x-token": token,
        },
      }
    );

    if (status === 204) {
      //Actualizar estado de la aplicación
      setUserPhone(newPhone);
      setUserEmail(newEmail);
      setUserName(newName);
      setUserAdress(
        `Calle: ${newStreet}|Colonia: ${newColonia}|Municipio: ${newMunicipio}|Estado: ${newState}|CP: ${newPostalCode}|País: ${newCountry}`
      );
      setAlert("Se actualizó con éxito");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      setEdit(false);
      return;
    } else {
      setAlert("Algo salió mal");
      setTimeout(() => {
        setAlert("");
      }, 4000);
      return;
    }
  };

  return (
    <Layout>
      <NavBar title={"Mi perfil"} image={"bg-navBarLogIn"} />
			{
				edit ? <UserInformation />
				: <UserInformation />
			}
      <div className="w-9/12 mx-auto justify-end flex space-x-5 relative bottom-32">
        <button onClick={() => setEdit(!edit)} className="text-black uppercase text-2xl py-2 px-8 bg-lightGray rounded-md">
          Actualizar
        </button>
        <button className="text-white uppercase text-2xl py-2 px-6 bg-red-600 rounded-md">
          Cerrar sesión
        </button>
      </div>
    </Layout>
  );
};
