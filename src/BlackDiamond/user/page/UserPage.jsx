import { useState } from "react";
import { Layout } from "../../ui/layout/Layout";
import { NavBar } from "../../ui/components";
import { UserInformation } from "../components/UserInformation";

export const UserPage = () => {
	const [edit, setEdit] = useState(false);
  return (
    <Layout>
      <NavBar title={"Mi perfil"} image={"bg-navBarLogIn"} />
      <div className="w-11/12 m-auto lg:w-9/12 mx-auto justify-end flex flex-col space-x-5 my-4 ">
        <UserInformation onEditClick={setEdit} edit={edit}/>
      </div>
      {!edit ? (
        <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col md:flex-row justify-end md:space-x-4 mb-4 space-y-3 md:space-y-0">
          <button
            onClick={() => setEdit(true)}
            className="text-black uppercase w-full md:text-2xl py-2 px-6 bg-lightGray rounded-md lg:w-64"
          >
            Actualizar
          </button>
          <button className="text-white uppercase w-full md:text-2xl py-2 px-6 bg-red-600 rounded-md lg:w-64">
            Cerrar sesión
          </button>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
};
