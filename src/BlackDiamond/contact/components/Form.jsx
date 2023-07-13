export const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submited")
  }

  return (
    <div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contactanos para mas información
        </h2>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Tu correo
            </label>
            <input
              type="email"
              id="email"
              className="placeholder-slate-500 bg-lightGray text-gray-900 border border-gray-300 text-sm rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="mail@mail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              className="placeholder-slate-500 bg-lightGray text-gray-900 border border-gray-300 text-sm rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="¿Cómo podemos ayudarte?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              rows="6"
              className="placeholder-slate-500 bg-lightGray text-gray-900 border border-gray-300 text-sm rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Deja un comentario..."
            ></textarea>
          </div>
          <button
            onClick={event => handleSubmit(event)}
            type="submit"
            className="py-2 px-4 text-lg font-semibold text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
