

export const SaleBenefic = ({ benefic }: props) => {
	return (
		<div className="uppercase font-extrabold md:text-lg mt-2">
			{
				benefic === 0 ? (
					<p>Tienes beneficio GOLD DIAMOND por comprar en la primer semana</p>
				) : benefic === 2 ? (
					<p>
						Tienes beneficio SILVER DIAMOND por comprar en la segunda semana
					</p>
				) : benefic === 3 ? (
					<p>
						Tienes beneficio BRONZE DIAMOND por comprar en la tercer semana
					</p>
				) : (
					""
				)}
		</div>
	)
}
