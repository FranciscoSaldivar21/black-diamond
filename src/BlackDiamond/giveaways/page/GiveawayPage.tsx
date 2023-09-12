import { useParams } from "react-router-dom";;
import { data } from "autoprefixer";
import { useEffect } from "react";
import axios from "axios";
import { GiveawayCarrousel } from "../components/GiveawayCarrousel";
import { Layout } from "../../ui/layout/Layout";
import { giveawayStore } from '../../../store/giveawayStore';
import { Tickets } from "../components/Tickets";
import { Promotions } from "../components/Promotions";
import { apiURL } from "../../../api/config";
import { NavBar } from '../../ui/components/NavBar';


export const GiveawayPage = () => {
	const { id } = useParams();
	//Guarda en el estado del sorteo
	const setGiveaway = giveawayStore((state) => state.setGiveaway);
	const { car, description, giveaway_date, creation_date, status, winner_id, tickets, ticket_price } = giveawayStore((state) => state.giveaway);

	const getGiveaway = async () => {
		const { data } = await axios.get(
			`${apiURL}giveaway/${id}`
		);
		setGiveaway(data);
	};

	useEffect(() => {
		getGiveaway();
	}, []);

	return (
		<Layout>
			<NavBar title={"SORTEOS"} image={"bg-navBarGiveawayBuy"} />
			<div className="bg-zinc-800 w-full m-auto flex flex-col items-center justify-center pt-8">
				<p className="uppercase py-3 px-12 md:px-32 bg-lightGold text-2xl font-bold rounded-xl" >selección de fichas</p>
				<Tickets />
			</div>
		</Layout>
	);
}
