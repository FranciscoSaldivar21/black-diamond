import { TransferData } from "./TransferData";


export const PendingPay = () => {
	return (
		<div className="mt-2">
			<p className="text-justify font-bold md:text-lg text-red-500">
				Tu compra sigue pendiente de pago.
			</p>
			<p className="text-justify md:text-lg">
				Puedes realizar el pago por medio de tiendas de autoservicio,
				directamente en el banco o a través de transferencia electrónica
			</p>
			<p className="text-justify md:text-lg">
				Cuando realices el pago o transferencia, envía tu comprobante de
				pago en el siguiente link.
			</p>
			<button
				onClick={() =>
					window.open(
						`https://api.whatsapp.com/send?phone=3322122459&text=Validar%20pago%20de%20la%20compra%20con%20Folio:%20${saleId}%0A`
					)
				}
				className="uppercase rounded py-2 px-8 w-full sm:w-auto my-2 text-black transition ease-in-out delay-50 bg-lightGold font-bold"
			>
				Enviar comprobante de pago
			</button>
			<p className="text-justify md:text-lg">
				Si ya lo enviaste en menos de 24 horas acreditaremos tu pago.
			</p>
			<p className="text-justify md:text-lg">
				Si ya enviaste tu comprobante y no cambia el estaus en 24 horas,
				envíanos mensaje por WhatsApp.
			</p>
			<TransferData />
		</div>
	)
}
