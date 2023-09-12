

export const SelectedTicketsDrawer = ({ selectedTickets, deleteTicket } : props) => {
	if(selectedTickets.length > 0){
		return (
			<div className="my-6">
				<p className="text-lg text-lightGold">Fichas seleccionadas
					<span className="text-sm ml-2">*Para eliminar una ficha vuelve a dar click y el numero desaparecerá de tu selección de fichas</span>
				</p>
				<div className="mt-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-11 gap-3">
					{
						selectedTickets.map((element, i) => {
							return <p key={i} onClick={() => deleteTicket(element)} className="cursor-pointer font-semibold bg-lightGold text-center py-2.5 rounded-lg">{ element }</p>
						})
					}
				</div>
				<div className="mt-4">
					<p className="text-white text-sm">*Para eliminar una ficha vuelve a dar click y el numero desaparecerá de tus fichas seleccionadas</p>
					<p className="text-white text-sm">*Si el numero especifico no aparece significa que la ficha ya ha sido comprada</p>
				</div>
				<button onClick={() => console.log("Comprando...")} className="mt-4 md:mt-8 bg-lightGold py-3 px-10 rounded-lg font-semibold text-xl">Comprar</button>
			</div>
		)
	}else{
		return "";
	}
}
