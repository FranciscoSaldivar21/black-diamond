

export const SelectedTicketsCounter = ({ number }: props) => {
	if (number > 0) {
		return (
			<div className="my-4">
				<p className="text-lightGold text-xl md:text-2xl font-bold">
					Tienes
					<span className="bg-white py-2 px-3 md:py-4 md:px-6 rounded-lg text-black mx-2 md:mx-4">{number} </span>
					Fichas Seleccionadas
				</p>
			</div>
		)
	} else {
		return "";
	}
}
