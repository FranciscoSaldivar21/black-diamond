

export const UpdateUserForm = ({setEdit}) => {
	return (
    <div>
      <div className="bg-zinc-800 p-8 rounded-lg flex flex-col justify-center items-end">

			</div>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={() => console.log("Guardando")}
          className="text-black uppercase text-2xl py-2 px-8 bg-lightGray rounded-md w-64"
        >
          Actualizar
        </button>
        <button
          onClick={() => setEdit(false)}
          className="text-white uppercase text-2xl py-2 px-6 bg-red-600 rounded-md w-64"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
