
export const TicketItem = ({ ticket, onClick }: props) => {
	return (
	<button onClick={onClick} className="text-center py-3 bg-white text-black hover:bg-lightGold hover:cursor-pointer hover:font-semibold border border-gray-400">
		{ticket}
	</button>
	);
}
