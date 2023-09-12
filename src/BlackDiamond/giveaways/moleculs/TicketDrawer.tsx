import { useState, useEffect } from 'react';
import { SelectedTicketsCounter } from './SelectedTicketsCounter';
import { Inputs } from './Inputs';
import { SelectedTicketsDrawer } from './SelectedTicketsDrawer';
import { giveawayStore } from '../../../store/giveawayStore';
import { TicketDrawerFooter } from './TicketDrawerFooter';
import axios from 'axios';
import { apiURL } from '../../../api/config';
import { Loading } from '../../ui/components/Loading';


export const TicketDrawer = () => {
	const limit = 42;
	const [tickets, setTickets] = useState([]);
	const totalTickets = giveawayStore((state) => state.giveaway.tickets);
	const giveawayId = giveawayStore((state) => state.giveaway.id);
	const creation_date = giveawayStore((state) => state.giveaway.creation_date);
	const [selectedTickets, setSelectedTickets] = useState([]);
	const [selectValue, setSelectValue] = useState(0);
	const [search, setSearch] = useState("");

	const searchTicket = async () => {
		if (search < 1 || search > totalTickets) {
			alert("Ingresa un numero mayor a 0 y menor a " + totalTickets);
			return;
		}

		switch (parseInt(selectValue)) {
			case 0:
				try {
					const { data } = await axios.get(`${apiURL}giveaway/isTicketFree/${search}/${giveawayId}`);
					if (data.isFree) {
						setTickets([parseInt(search)]);
						console.log(tickets);
						return;
					}
					setSearch("");
					setTickets([]);
				} catch (error) {
					console.log(error);
				}
				break;
			case 1: 
				setTickets([]);
				
				try {
					const { data } = await axios.get(`${apiURL}giveaway/getTicketsStartWith/${giveawayId}/${search}`);
					setTickets(data.array);
				} catch (error) {
					console.log(error);
				}
				break;
			case 2: 
				setTickets([]);

				try {
					const { data } = await axios.get(`${apiURL}giveaway/getTicketsEndtWith/${giveawayId}/${search}`);
					setTickets(data.array);
				} catch (error) {
					console.log(error);
				}
				break;
			case 3: 
				setTickets([]);

				try {
					const { data } = await axios.get(`${apiURL}giveaway/getTicketsContain/${giveawayId}/${search}`);
					console.log(data);
					// setTickets(data.array);
				} catch (error) {
					console.log(error);
				}
				break;
			case 4:
				try {
					const { data } = await axios.get(`${apiURL}giveaway/isTicketFree/${search}/${giveawayId}`);
					if (data.isFree) {
						setTickets([parseInt(search)]);
						console.log(tickets);
						return;
					}
					setSearch("");
					setTickets([]);
				} catch (error) {
					console.log(error);
				}
				break;
			case 5: 
				//Que los digitos sumen
				break;
			case 6: 
				setTickets([]);

				try {
					const { data } = await axios.get(`${apiURL}giveaway/getTicketFree/${giveawayId}`);
					setTickets([data.number]);
				} catch (error) {
					console.log(error);
				}
				break;
				
			default:
				break;
		}
	}

	const initializeTickets = async () => {
		setTickets([]);
		try {
			const { data } = await axios.get(`${apiURL}giveaway/initializeTickets/${giveawayId}`);
			setTickets(data.aux);
		} catch (error) {
			console.log(error);
		}
	}

	const addTicket = (ticket) => {
		if(parseInt(ticket) > 33333 || parseInt(ticket) <= 0){
			alert("El numero seleccionado está fuera del rango (1 - 33333)");
			return;
		}
		if(!selectedTickets.includes(ticket))
			setSelectedTickets((prevTickets) => [...prevTickets, ticket]);
	}

	const deleteTicket = (ticket) => {
		const aux = selectedTickets.filter((item) => item !== ticket);
		setSelectedTickets(aux);
	}

	useEffect(() => {
		initializeTickets();
	}, [])

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
	return (
		<div className="bg-zinc-800">
			<div className='px-8 md:px-20 pb-6'>
				<SelectedTicketsCounter number={selectedTickets.length} />
				<Inputs selectValue={selectValue} setSelectValue={setSelectValue} searchText={search} setSearch={setSearch} searchTickets={searchTicket} />
				<SelectedTicketsDrawer handleClickBuy={handleBuyClick} selectedTickets={selectedTickets} deleteTicket={deleteTicket} />
			</div>
			<div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 bg-white py-6 px-6 md:px-14 lg:px-28 gap-3">
				{
					tickets.length > 0 ?
						tickets.map((ticket, i) => {
							return (<p key={i} onClick={() => addTicket(ticket)} className='border py-3.5 text-center cursor-pointer hover:bg-lightGold'>{ticket}</p>);
						}) : <Loading />
				}
			</div>
			<TicketDrawerFooter refreshTickets={initializeTickets} />
		</div>
	)
}
