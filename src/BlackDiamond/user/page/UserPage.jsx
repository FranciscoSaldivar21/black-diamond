import { useState } from "react";
import { userStore } from "../../../store/userStore";
import { Button } from "../../molecules/Button";
import axios from "axios";
import { Layout } from "../../ui/layout/Layout";

export const UserPage = () => {
    const reset = userStore((state) => state.reset);
    
    const id = userStore((state) => state.id);
    const name = userStore((state) => state.name);
    const email = userStore((state) => state.email);
    const phone = userStore((state) => state.phone);
    const adress = userStore((state) => state.adress);
    const setUserPhone = userStore((state) => state.setPhone);
    const setUserName = userStore((state) => state.setName);
    const setUserEmail = userStore((state) => state.setEmail);
    
    const [alert, setAlert] = useState("");
    const [edit, setEdit] = useState(false);
    const [newName, setName] = useState(name);
    const [newPhone, setPhone] = useState(phone);
    const [newEmail, setEmail] = useState(email);

    const handleButonEditPress = () => setEdit(!edit);
    const handleSubmitChanges = async () => {
        //Validar campos
        const { status } = await axios.put("http://localhost:3000/api/users/" + id, {
            name: newName,
            phone: newPhone,
            email: newEmail,
        });

        if(status === 204){ //Actualizar estado de la aplicación
            setUserPhone(newPhone);
            setUserEmail(newEmail);
            setUserName(newName);
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
        <div className="w-11/12 mx-auto h-[450px]">
            <p className="font-titles text-4xl">Mi perfil</p>
            <div className="mt-6">
                <p className="text-xl mb-4">Mi nombre: <span className="font-bold">{name}</span></p>
                <p className="text-xl mb-4">Mi telefono: <span className="font-bold">{phone}</span></p>
                <p className="text-xl mb-4">Mi correo: <span className="font-bold">{email}</span></p>
                <p className="text-xl mb-4">Mi direccion: <span className="font-bold">{adress}</span></p>
            </div>
            <button onClick={reset} type="button" className="rounded-lg text-white py-2 px-4 bg-red-500 hover:bg-red-600">Cerrar sesión</button>
            {edit === true ?
                <div className="flex-row mt-20 w-2/5">
                    <p className="font-titles text-4xl">Nuevos datos</p>
                    <div className="flex items-center mb-4 mt-8">
                        <label className="block text-xl w-56 font-bold">Nuevo nombre</label><input className="block text-xl py-2 px-4 w-full border border-solid border-slate-600 rounded-lg focus:border-blue-600" title="name" type="text" value={newName} onChange={({target}) => setName(target.value)}/>
                    </div>
                    <div className="flex items-center mb-4">
                        <label className="block text-xl w-56 font-bold">Nuevo telefono</label><input className="block text-xl py-2 px-4 w-full border border-solid border-slate-600 rounded-lg focus:border-blue-600" title="phone" type="text" value={newPhone} onChange={({target}) => setPhone(target.value)}/>
                    </div>
                    <div className="flex items-center mb-4">
                        <label className="block text-xl w-56 font-bold">Nuevo correo</label><input className="block text-xl py-2 px-4 w-full border border-solid border-slate-600 rounded-lg focus:border-blue-600" title="email" type="text" value={newEmail} onChange={({target}) => setEmail(target.value)}/>
                    </div>
                </div> 
            : ''}
            <div className="mt-8">
                <Button onPress={edit === true ? handleSubmitChanges : handleButonEditPress} title="Actualizar datos" bgColor="blue-600" textColor="white"/>
                {
                    edit === true ? <Button onPress={handleButonEditPress} title="Cancelar" bgColor='red-500' textColor="white"/>
                    : ''
                }
            </div>
            <p className="text-xl text-green-600 my-8">{ alert }</p>
        </div>
    </Layout>
    );
};
