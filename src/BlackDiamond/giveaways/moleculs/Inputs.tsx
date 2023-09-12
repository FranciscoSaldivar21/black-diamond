
export const Inputs = ({selectValue, setSelectValue, searchText, setSearch, searchTickets} : props) => {
	return (
		<div className="flex mt-8 flex-col md:flex-row">
			<select
				onChange={({ target }) => setSelectValue(target.value)}
				className="sm:ml-0 border rounded-md sm:px-3 sm:py-2 sm:mr-4 bg-gray-50 border-gray-300 px-1 py-1 font-bold text-xl"
			>
				<option value={0} style={{ backgroundColor: "#27272A", color: "#ffa700", fontWeight: "bold" }}>Filtrar por</option>
				<option style={{ backgroundColor: "#27272A", color: "#ffa700", fontWeight: "bold"}} value={1}>Inicia con</option>
				<option style={{ backgroundColor: "#27272A", color: "#ffa700", fontWeight: "bold"}} value={2}>Termina con</option>
				<option style={{ backgroundColor: "#27272A", color: "#ffa700", fontWeight: "bold"}} value={3}>Contiene</option>
				<option style={{ backgroundColor: "#27272A", color: "#ffa700", fontWeight: "bold"}} value={4}>Boleto especifico</option>
				{/* <option style={{ backgroundColor: "#27272A", color: "#ffa700", fontWeight: "bold"}} value={5}>Que los digitos sumen</option> */}
				<option style={{ backgroundColor: "#27272A", color: "#ffa700", fontWeight: "bold"}} value={6}>Maquina de la suerte</option>
			</select>
			<div className=" flex-1 relative mt-4 sm:mt-0">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg className="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
					</svg>
				</div>
				<input type="number" className="block w-full p-2 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Ingresa un número" value={searchText} onChange={({ target }) => setSearch(target.value)} />
				<button onClick={() => searchTickets()} type="submit" className="text-black absolute right-1 bottom-1.5 bg-darkGold hover:font-bold font-medium rounded-lg text-xl px-2 py-1">Buscar</button>
			</div>
		</div>
	)
}
