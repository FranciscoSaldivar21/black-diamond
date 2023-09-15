import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../../../api/config";

export const SaleCard = ({ sale }: props) => {
	const navigate = useNavigate();
	console.log(sale);


	return (
		<div className="flex flex-col md:flex-row rounded-lg border">
			<div className="rounded-lg">
				<img
					className="w-full rounded-xl"
					src={"https://www.pngplay.com/wp-content/uploads/13/Ford-Mustang-Shelby-GT350-Download-Free-PNG.png"}
					alt="Car image"
				/>
			</div>
			<div className="px-6 py-4">
				<p className="font-bold text-4xl mb-2 uppercase text-lightGold">{sale.car}</p>
				<p className="text-lg">{sale.description}</p>
				<p className="text-lg">Fecha del sorteo {sale.giveaway_date}</p>
				<p className="text-lg">Estado: {sale.saleStatus === 1 ? <span className="text-green-500">Pagada</span> : <span className="text-red-500 text-lg font-bold">Pendiente de pago</span>}</p>
				<p className="mt-2 text-lg">
					Estatus del sorteo:{" "}
					{sale.status === 1 ? (
						<span className="text-teal-500 uppercase">Activo</span>
					) : (
						<span className="text-red-500 uppercase">Finalizado</span>
					)}
				</p>
				<button
					onClick={() => navigate('/sale', { state: { saleId: sale.id } })}
					className="mt-2 py-2 px-8 rounded-lg uppercase roundedtext-black font-bold transition ease-in-out delay-50 bg-lightGold"
				>
					Ver compra
				</button>
			</div>
		</div>
	);
}
