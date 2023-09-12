import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../../../api/config";
import { giveawayStore } from '../../../store/giveawayStore';
import { TicketItem } from "./TicketItem";
import { userStore } from "../../../store/userStore";

export const TicketsDrawer = () => {
	const totalTickets = giveawayStore((state) => state.giveaway.tickets);
	const idUser = userStore((state) => (state.id));
	const token = userStore((state) => state.token);
	const userEmail = userStore((state) => state.email);
	const creation_date = giveawayStore((state) => state.giveaway.creation_date);
	const id = giveawayStore((state) => state.giveaway.id);
	const resetSession = userStore((state) => state.reset);
	const navigate = useNavigate();

	//Variable para buscar
	const [search, setSearch] = useState("");
	const [ticketSearch, setTicketSearch] = useState("");
	const [ticketFound, setTicketFound] = useState("");

	//Alerta en pantalla
	const [textAlert, setTextAlert] = useState("");
	const [textAlert2, setTextAlert2] = useState("");

	//Array para dibujar todos los boletos
	const [tickets, setTickets] = useState([]);

	//Array para tickets seleccionados
	const [selectedTickets, setSelectedTickets] = useState([]);


	//Función para guardar boleto
	const handleTicketPressed = async (ticket) => {
		//Si no está atutenticado no dejamos guardar el boleto
		if (!idUser) {
			alert("Debes iniciar sesión para poder seleccionar boletos");
			return;
		}

		//Crear código para validar en bdd el boleto disponible


		if (!selectedTickets.includes(parseInt(ticket))) {
			setSelectedTickets((prevTickets) => [...prevTickets, ticket]);
			setSearch("");
			setTicketSearch(null);
			setTicketFound(false);
		}

	};

	//Eliminar elementos selccionados al dar click
	const handleDeleteTicket = (ticket) => {
		const aux = selectedTickets.filter((item) => item !== ticket);
		setSelectedTickets(aux);
	}

	const searchTickets = async (ticket) => {
		if (ticket > totalTickets) {
			alert(`Elige un rango menor a ${totalTickets}`)
			return;
		}

		if (ticket <= 0) {
			alert(`Elige un rango mayor a 0`);
			return;
		}

		setTicketSearch(ticket);
		if (ticket && ticket > 0 && ticket <= totalTickets) {
			try {
				const { data } = await axios.get(`${apiURL}giveaway/ticket/${id}/${ticket}`);
				setTicketFound(data.found);
			} catch (error) {
			}
		}

		return;
	}

	//Función para generar la compra
	const handleBuyClick = async () => {
		const pageConfirm = confirm("¿Desea terminar la compra?");

		if (!pageConfirm) {
			setTextAlert("Debe aceptar para generar la orden de compra");
			setTimeout(() => {
				setTextAlert("");
			}, 4000);
			return;
		}
		//Comparar fechas
		//Fecha actual de la compra
		let actualDate = new Date().getTime();

		//Cambiar orden de dd/mm/yy a mm/dd/yy
		const auxGiveawayDate = creation_date.split("/");
		//Crear fecha en el formato y obtener milisegundos + 3 días + 20 horas para el primer beneficio (GOLD)
		const gold = new Date(`${auxGiveawayDate[1]}/${auxGiveawayDate[0]}/${auxGiveawayDate[2]}`).getTime() + 331200000;
		//6 días + 20 horas (SILVER)
		const silver = new Date(`${auxGiveawayDate[1]}/${auxGiveawayDate[0]}/${auxGiveawayDate[2]}`).getTime() + (2 * 331200000);
		//9 días + 20 horas (BRONZE)
		const bronze = new Date(`${auxGiveawayDate[1]}/${auxGiveawayDate[0]}/${auxGiveawayDate[2]}`).getTime() + (3 * 331200000);


		//Beneficio que se enviará
		let giveawayBenefic = 0;

		if (actualDate <= gold)
			giveawayBenefic = 1
		else if (actualDate <= silver)
			giveawayBenefic = 2
		else if (actualDate <= bronze)
			giveawayBenefic = 3

		const data = {
			tickets: selectedTickets,
			ticketPrice: 275,
			userEmail,
			giveawayBenefic
		}

		try {
			const response = await axios.post(`${apiURL}sales/create-checkout-session/${id}/${idUser}`, data, {
				headers: {
					"x-token": token,
				},
			});
			navigate("/sale", {
				state: {
					saleId: response.data.saleId
				}
			});
		} catch (error) {
			console.log(error);
			const { response } = error;
			setTextAlert(response.data.error);
			setTimeout(() => {
				setTextAlert("");
				setSelectedTickets([]);
			}, 4000);
		}
	}

	useEffect(() => {
		if (selectedTickets.length > 2 && selectedTickets.length < 5)
			setTextAlert2("Tienes 7 boletos de regalo");
		if (selectedTickets.length >= 5 && selectedTickets.length < 8)
			setTextAlert2("Tienes 15 boletos de regalo");
		if (selectedTickets.length >= 8 && selectedTickets.length < 10)
			setTextAlert2("Tienes 22 boletos de regalo");
		if (selectedTickets.length >= 10)
			setTextAlert2("Tienes 30 boletos de regalo y bono SUPER TRIPLE BLACK DIAMOND");

	}, [selectedTickets]);


	const drawTickets = () => {
		let i = 0;
		let aux = [];
		while (i < 42) {
			const number = Math.floor(Math.random() * (33333 - 1) + 1);
			aux.push(number);
			i++;
		}
		setTickets(aux);
	}


	useEffect(() => {
		drawTickets();
	}, []);



	return (
		<div>
			<div className="mb-8 space-y-6 w-11/12 m-auto">
				<p className="text-2xl font-bold text-lightGold">Tienes <span className="py-2 rounded-lg px-5 bg-white text-black mx-3">{selectedTickets.length}</span> Fichas Seleccionadas</p>
				<div className="flex">
					<select
						onChange={({ target }) => setTicketsOffset(target.value)}
						className="ml-2 sm:ml-0 border rounded-md sm:px-3 sm:py-2 sm:mr-4 bg-gray-50 border-gray-300 px-1 py-1 font-bold text-xl"
					>
						<option>Filtrar por</option>
					</select>
					<div className=" flex-1 relative mt-4 sm:mt-0">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg className="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
						</div>
						<input type="number" className="block w-full p-2 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Ingresa un número" value={search} onChange={({ target }) => setSearch(target.value)} />
						<button onClick={() => searchTickets(search)} type="submit" className="text-black absolute right-1 bottom-1.5 bg-darkGold hover:font-bold font-medium rounded-lg text-xl px-2 py-1">Buscar</button>
					</div>
				</div>
				<p className="mt-4 font-semibold text-lg text-lightGold">
					Fichas Seleccionadas
					<span className="text-base font-normal ml-2"> *Para eliminar una ficha vuelve a dar click y el número desaparecerá de tu selección de fichas</span>
				</p>
				{
					selectedTickets.length > 0 ?
						<div className="flex flex-col">
							<div className="grid grid-cols-5 gap-x-2 gap-y-4 mb-4 sm:grid-cols-10 md:grid-cols-12 xl:grid-cols-18">
								{
									selectedTickets.map((element) => {
										return <button onClick={() => handleDeleteTicket(element)} className="ml-1 px-10 text-lg py-2 border border-solid border-black rounded-md bg-lightGold" key={element}>{element}</button>
									})
								}
							</div>
							<p className="text-red-600">{textAlert}</p>
							<p className="text-green-500">{textAlert2}</p>
							<p className="text-white">*Si el numero elegido no aparece aquí, significa que la ficha ya ha sido comprada</p>
							<button onClick={() => handleBuyClick()} className="w-60 uppercase text-lg font-bold bg-lightGold py-4 px-3 rounded-xl my-5 text-black hover:font-bold hover:bg-blue-700">Comprar fichas</button>
						</div>
						: ''
				}
			</div>
			<div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-10 mx-auto mt-4 bg-white w-full px-28 py-8">
				{
					tickets.length > 0 ?
						tickets.map((ticket) => {
							return (
								<TicketItem
									key={ticket}
									ticket={ticket}
									onClick={() => handleTicketPressed(ticket)}
								/>
							);
						})
						: ""
				}
			</div>
		</div>
	);
};
