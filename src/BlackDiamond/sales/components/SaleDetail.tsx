

export const SaleDetail = ({ id, sale_date, total, payStatus } : props) => {
	return (
		<div className="mt-3">
			<p className="text-xl font-semibold uppercase font-subTitles md:text-3xl">
				Detalles de tu compra
			</p>
			<p className="mt-2">
				<span className="font-bold md:text-lg">Folio de compra: </span>
				{id}
			</p>
			<p>
				<span className="font-bold md:text-lg">Fecha de compra: </span>
				{sale_date}
			</p>
			<p>
				<span className="font-bold md:text-lg">Total de compra: </span>$
				{total}
			</p>
			<p className="font-bold md:text-lg">
				Estado:{" "}
				{payStatus === 1 ? (
					<span className="text-green-500">Pagada</span>
				) : (
					<span className="text-red-500">Pendiente de pago</span>
				)}
			</p>
		</div>
	)
}
