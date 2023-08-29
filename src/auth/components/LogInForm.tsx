import { NavLink, useNavigate } from "react-router-dom";


export const LogInForm = ({ setEmail, setPassword, setAlert, handleSubmit, alert } : props) => {
  const navigate = useNavigate();
  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-md text-lightGold font-bold"
        >
          Tu correo
        </label>
        <input
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          name="email"
          id="email"
          className=" border sm:text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-600 text-gray-700"
          placeholder="name@mail.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-md text-lightGold font-bold"
        >
          Contraseña
        </label>
        <input
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-gray-700"
          required={true}
          autoComplete="false"
        />
      </div>
      <div className="flex items-center justify-between">
        <NavLink
          to={"/iforgotmypassword"}
          className="text-sm text-black-600 font-semibold hover:underline text-lightGold"
        >
          Olvidaste tu contraseña?
        </NavLink>
      </div>
      <p className="text-red-600 font-bold">{alert}</p>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full text-black font-bold bg-primary-600 rounded-lg text-sm px-5 py-2.5 text-center bg-lightGold"
      >
        Iniciar sesión
      </button>
      <p className="text-sm font-light text-gray-100">
        Aún no tienes una cuenta?{" "}
        <a
          onClick={() => navigate("/register")}
          className="font-semibold text-primary-600 hover:underline text-lightGold cursor-pointer"
        >
          Regístrate
        </a>
      </p>
    </form>
  )
}
