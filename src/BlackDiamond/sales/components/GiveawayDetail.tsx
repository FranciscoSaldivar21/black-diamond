

export const GiveawayDetail = ({ car, creation_date, giveaway_date, status } : props) => {
	return (
		<div className="py-4">
			<p className="text-xl font-semibold uppercase font-subTitles md:text-3xl mb-2">
				Sorteo{" "}
			</p>
			<div className="mt-4 grid items-center grid-cols-1 md:grid-cols-4 py-4 gap-2">
				<img
					className="w-full rounded-xl"
					src={
						"https://www.pngplay.com/wp-content/uploads/13/Ford-Mustang-Shelby-GT350-Download-Free-PNG.png"
					}
					alt="Car image"
				/>
				<div className="md:col-span-2">
					<p className="md:text-lg">
						<span className="font-bold md:text-lg">Auto: </span>
						{car}
					</p>
					<p className="md:text-lg">
						<span className="font-bold md:text-lg">
							Fecha de registro del sorteo:{" "}
						</span>
						{creation_date}
					</p>
					<p className="md:text-lg">
						<span className="font-bold md:text-lg">Fecha del sorteo: </span>
						{giveaway_date}
					</p>
					{status === 1 ? (
						<p className="text-green-600 font-bold md:text-lg">
							<span className="text-black font-bold md:text-lg">
								Estatus del sorteo:{" "}
							</span>
							Activo
						</p>
					) : (
						<p className="text-red-600 font-bold md:text-lg">
							<span className="text-black font-bold md:text-lg">
								Estatus del sorteo:{" "}
							</span>
							Inactivo
						</p>
					)}
				</div>
			</div>
		</div>
	)
}
