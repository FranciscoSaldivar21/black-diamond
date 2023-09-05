import { userStore } from "../../../store/userStore";
import logo from "../../../assets/logo-menu.png";
import { UpdateUserForm } from "./UpdateUser";

export const UserInformation = ({onEditClick, edit}) => {
  const name = userStore((state) => state.name);
  const email = userStore((state) => state.email);
  const phone = userStore((state) => state.phone);
  const adress = userStore((state) => state.adress);
  const adress2 = adress.split("|");

  return (
			!edit ?
				<div className="bg-zinc-800 p-8 rounded-lg flex flex-col lg:justify-center lg:items-center space-y-4">
					<img className="px-16" src={logo} />
					<p className="font-titles text-3xl md:text-4xl text-center font-bold text-lightGray">
						¡Hola {name}!
					</p>
					<p className="font-titles text-2xl md:text-3xl text-center text-white">
						Esta es tu información
					</p>
					<div className="p-2 lg:p-8 grid grid-cols-1 md:grid-cols-3">
						<div className="flex flex-col lg:items-center">
							<p className="text-lightGray font-semibold">Nombre: </p>
							<p className="text-white">{name}</p>
						</div>
						<div className="flex flex-col lg:items-center">
							<p className="text-lightGray font-semibold">Teléfono: </p>
							<p className="text-white">{phone}</p>
						</div>
						<div className="flex flex-col lg:items-center">
							<p className="text-lightGray font-semibold">Correo: </p>
							<p className="text-white">{email}</p>
						</div>
						{
							adress2.map((element, i) => {
								return (
									<div key={i} className="flex flex-col lg:items-center">
										<p className="text-lightGray font-semibold">
											{element.split(": ")[0]}:
										</p>
										<p className="text-white">{element.split(": ")[1]}</p>
									</div>
								);
							})
						}
					</div>
				</div>
				: <UpdateUserForm setEdit={onEditClick}/>
  );
};
