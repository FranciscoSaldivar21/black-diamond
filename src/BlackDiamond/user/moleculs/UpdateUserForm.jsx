import logo from "../../../assets/logo-menu.png";

export const UpdateUserForm = ({name, setName, email, setEmail, phone, setPhone, street, setStreet, colonia, setColonia, municipio, setMunicipio, postalCode, setPostalCode, state, setState, country, setCountry}) => {
	return (
    <div className="bg-zinc-800 p-8 rounded-lg flex flex-col">
      <img className="px-16 pb-8 md:w-[600px] md:m-auto" src={logo} />
      <form className="space-y-2">
        <p className="text-lightGold font-semibold uppercase text-xl mb-2">
          Tus nuevos datos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Nombre</label>
            <input value={name} onChange={({target}) => setName(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Correo</label>
            <input value={email} onChange={({target}) => setEmail(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Teléfono</label>
            <input value={phone} onChange={({target}) => setPhone(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Calle</label>
            <input value={street} onChange={({target}) => setStreet(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Colonia</label>
            <input value={colonia} onChange={({target}) => setColonia(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Municipio</label>
            <input value={municipio} onChange={({target}) => setMunicipio(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Código postal</label>
            <input value={postalCode} onChange={({target}) => setPostalCode(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">Estado</label>
            <input value={state} onChange={({target}) => setState(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg text-lightGold">País</label>
            <input value={country} onChange={({target}) => setCountry(target.value)} className="rounded-md p-2 text-lgc" type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};
