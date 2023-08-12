import { useEffect, useState } from "react";
import { userStore } from "../../../store/userStore";
import axios from "axios";
import { Layout } from "../../ui/layout/Layout";
import { isValidEmail } from "../../../auth/helpers/validateEmail";

export const UserPage = () => {
    const reset = userStore((state) => state.reset);
    
    const id = userStore((state) => state.id);
    const name = userStore((state) => state.name);
    const email = userStore((state) => state.email);
    const phone = userStore((state) => state.phone);
    const adress = userStore((state) => state.adress);
    const adress2 = adress.split("|");
    const setUserPhone = userStore((state) => state.setPhone);
    const setUserName = userStore((state) => state.setName);
    const setUserEmail = userStore((state) => state.setEmail);
    const setUserAdress = userStore((state) => state.setAdress);
    
    const [alert, setAlert] = useState("");
    const [edit, setEdit] = useState(false);

    
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
    }, [edit])
    

    const handleButonEditPress = () => setEdit(!edit);

    const handleSubmitChanges = async () => {
        //Validar campos
        if (newEmail === "" || newName === "" || newPhone === "" || newStreet === "" || newCountry === "" || newMunicipio === "" || newColonia === "" || newState === "" || newPostalCode === "") {
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

        const { status } = await axios.put("http://localhost:3000/api/users/" + id, {
            name: newName,
            phone: newPhone,
            email: newEmail,
            adress: `Calle: ${newStreet}|Colonia: ${newColonia}|Municipio: ${newMunicipio}|Estado: ${newState}|CP: ${newPostalCode}|País: ${newCountry}`
        });

        if(status === 204){ //Actualizar estado de la aplicación
            setUserPhone(newPhone);
            setUserEmail(newEmail);
            setUserName(newName);
            setUserAdress(`Calle: ${newStreet}|Colonia: ${newColonia}|Municipio: ${newMunicipio}|Estado: ${newState}|CP: ${newPostalCode}|País: ${newCountry}`);
            setAlert("Se actualizó con éxito");
            setTimeout(() => {
                setAlert("");
            }, 4000);
            setEdit(false);
            return;
        }else{
            setAlert("Algo salió mal");
            setTimeout(() => {
                setAlert("");
            }, 4000);
            return;
        }
    }

    return (
      <Layout>
        <div className="w-11/12 mx-auto pt-8 h-auto mb-4 md:mb-16 2xl:pb-24">
          <p className="font-titles text-3xl md:text-4xl uppercase">
            Mi perfil
          </p>
          <div className="mt-6">
            <p className="text-xl">
              Mi nombre: <span className="font-bold">{name}</span>
            </p>
            <p className="text-xl">
              Mi telefono: <span className="font-bold">{phone}</span>
            </p>
            <p className="text-xl">
              Mi correo: <span className="font-bold">{email}</span>
            </p>
            <p className="text-xl">Mi domicilio: </p>
            {adress2.map((element, i) => (
              <p className="text-xl" key={i}>
                {element}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={reset}
                type="button"
                className="rounded-lg mt-4 text-white py-2 px-4 bg-red-500 hover:bg-red-600"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
          {edit === true ? (
            <div className="mt-8">
              <p className="font-titles text-3xl md:text-4xl uppercase">
                Nuevos datos
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-1 mt-4">
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nuevo nombre
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="text"
                    value={newName}
                    onChange={({ target }) => setNewName(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nuevo telefono
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="text"
                    value={newPhone}
                    onChange={({ target }) => setNewPhone(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nuevo correo
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="email"
                    value={newEmail}
                    onChange={({ target }) => setNewEmail(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nueva calle
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="text"
                    value={newStreet}
                    onChange={({ target }) => setNewStreet(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nueva colonia
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="text"
                    value={newColonia}
                    onChange={({ target }) => setNewColonia(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nuevo municipio
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="text"
                    value={newMunicipio}
                    onChange={({ target }) => setNewMunicipio(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nuevo estado
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="text"
                    value={newState}
                    onChange={({ target }) => setNewState(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nuevo código postal
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="number"
                    value={newPostalCode}
                    onChange={({ target }) => setNewPostalCode(target.value)}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="text-lg font-bold uppercase">
                    Nuevo país
                  </label>
                  <input
                    className="mt-1 text-lg py-2 px-4 border border-solid border-slate-600 rounded-lg focus:border-blue-600"
                    type="text"
                    value={newCountry}
                    onChange={({ target }) => setNewCountry(target.value)}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="mt-6 grid grid-cols-1 sm:flex sm:flex-row">
            <button
              className="rounded-lg text-black py-2 px-4 bg-lightGold hover:bg-darkGold"
              onClick={
                edit === true ? handleSubmitChanges : handleButonEditPress
              }
            >
              Actualizar
            </button>
            {edit === true ? (
              <button
                className="mt-4 sm:mt-0 sm:ml-4 rounded-lg text-white py-2 px-4 bg-red-500 hover:bg-red-600"
                onClick={() => setEdit(false)}
              >
                Cancelar
              </button>
            ) : (
              ""
            )}
          </div>
          <p className="text-xl text-green-600 my-4">{alert}</p>
        </div>
      </Layout>
    );
};
