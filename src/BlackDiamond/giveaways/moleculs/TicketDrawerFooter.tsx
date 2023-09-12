import { giveawayStore } from "../../../store/giveawayStore"

export const TicketDrawerFooter = ({ refreshTickets }: props) => {
	const tickets = giveawayStore((state) => state.giveaway.tickets);
	return (
		<div className="bg-white py-6 px-6 md:px-14 lg:px-28 flex space-x-1 justify-between">
			<div>
				<p className="font-semibold text-sm md:text-xl">Tu eliges como jugar</p>
				<p className="uppercase font-bold text-sm md:text-xl">¡Mucha suerte!</p>
			</div>
			<button onClick={refreshTickets} className="text-sm md:text-xl border rounded-full px-2 md:py-2 md:px-10 border-black font-bold hover:bg-lightGold">Refrescar numeros</button>
			<div className="text-end">
				<p className="text-sm md:text-xl font-bold">Emisión de Fichas</p>
				<p className="font-bold text-lightGold text-sm md:text-xl">{tickets}</p>
			</div>
		</div>
	)
}
