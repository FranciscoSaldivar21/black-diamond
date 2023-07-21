

export const NamePhone = () => {
  return (
    <div className="flex-col">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-white"
        >
          Tu nombre
        </label>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          name="name"
          id="name"
          className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Juan Perez"
          required={true}
          minLength={10}
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-white"
        >
          Celular
        </label>
        <input
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          type="tel"
          name="phone"
          id="phone"
          className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tu numero de celular"
          required={true}
          minLength={10}
          maxLength={15}
        />
      </div>
    </div>
  );
}
