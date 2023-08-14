import ficha1 from "../../../assets/ficha-1.png";
import ficha3 from "../../../assets/ficha-3.png";
import ficha5 from "../../../assets/ficha-5.png";
import ficha8 from "../../../assets/ficha-8.png";
import ficha10 from "../../../assets/ficha-10.png";

export const PromotionCard = ({buyTickets, giftTickets, image, total} : props) => {
    if(buyTickets === 1){
        return (
            <div className="p-2 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-center">
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="h-1/5 flex justify-center align-middle mt-2">
                        <img src={`${ficha1}`} className="w-16 h-16" />
                    </div>
                    <div className="pt-10 h-3/5 flex flex-col items-center mt-2">
                        <p className="text-sm -mt-2 text-center">COMPRA {buyTickets} BOLETO</p>
                        <p className="text-sm text-center font-semibold mt-1">PARTICIPAS EN EL SORTEO</p>
                    </div>
                    <div className="h-1/5 py-1 px-4 mt-2 bg-darkGold flex justify-center align-middle items-center w-full rounded-lg">
                        <p className="font-semibold  text-xs sm:text-sm">POR {total} PESOS</p>
                    </div>
                </div>
            </div>
        )
    }else if(buyTickets === 3){
        return (
            <div className="p-2 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-center">
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="h-1/5 flex justify-center align-middle mt-2">
                        <img src={`${ficha3}`} className="w-16 h-16" />
                    </div>
                    <div className="pt-10 h-3/5 flex flex-col items-center mt-2">
                        <p className="text-sm -mt-2 text-center">COMPRA {buyTickets} BOLETOS</p>
                        <p className="text-sm text-center font-semibold mt-1">TE LLEVAS {giftTickets} DE REGALO</p>
                        {
                            buyTickets >= 10 ? <p className="text-sm text-center font-semibold mt-1">+ BONO SUPER TRIPLE BLACK DIAMOND</p>
                            : ""
                        }
                    </div>
                    <div className="h-1/5 py-1 px-4 mt-2 bg-darkGold flex justify-center align-middle items-center w-full rounded-lg">
                        <p className="font-semibold  text-xs sm:text-sm">POR {total} PESOS</p>
                    </div>
                </div>
            </div>
        )
    }else if(buyTickets === 5){
        return (
            <div className="p-2 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-center">
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="h-1/5 flex justify-center align-middle mt-2">
                        <img src={`${ficha5}`} className="w-16 h-16" />
                    </div>
                    <div className="pt-10 h-3/5 flex flex-col items-center mt-2">
                        <p className="text-sm -mt-2 text-center">COMPRA {buyTickets} BOLETOS</p>
                        <p className="text-sm text-center font-semibold mt-1">TE LLEVAS {giftTickets} DE REGALO</p>
                        {
                            buyTickets >= 10 ? <p className="text-sm text-center font-semibold mt-1">+ BONO SUPER TRIPLE BLACK DIAMOND</p>
                                : ""
                        }
                    </div>
                    <div className="h-1/5 py-1 px-4 mt-2 bg-darkGold flex justify-center align-middle items-center w-full rounded-lg">
                        <p className="font-semibold  text-xs sm:text-sm">POR {total} PESOS</p>
                    </div>
                </div>
            </div>
        )
    }else if(buyTickets === 8){
        return (
            <div className="p-2 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-center">
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="h-1/5 flex justify-center align-middle mt-2">
                        <img src={`${ficha8}`} className="w-16 h-16" />
                    </div>
                    <div className="pt-10 h-3/5 flex flex-col items-center mt-2">
                        <p className="text-sm -mt-2 text-center">COMPRA {buyTickets} BOLETOS</p>
                        <p className="text-sm text-center font-semibold mt-1">TE LLEVAS {giftTickets} DE REGALO</p>
                        {
                            buyTickets >= 10 ? <p className="text-sm text-center font-semibold mt-1">+ BONO SUPER TRIPLE BLACK DIAMOND</p>
                                : ""
                        }
                    </div>
                    <div className="h-1/5 py-1 px-4 mt-2 bg-darkGold flex justify-center align-middle items-center w-full rounded-lg">
                        <p className="font-semibold  text-xs sm:text-sm">POR {total} PESOS</p>
                    </div>
                </div>
            </div>
        )
    }else if(buyTickets === 10){
        return (
            <div className="p-2 border-2 border-collapse  rounded-lg flex flex-col items-center shadow-xl bg-gray-100 justify-center">
                <div className="h-full flex flex-col justify-center items-center">
                    <div className="h-1/5 flex justify-center align-middle mt-2">
                        <img src={`${ficha10}`} className="w-16 h-16" />
                    </div>
                    <div className="pt-10 h-3/5 flex flex-col items-center mt-2">
                        <p className="text-sm -mt-2 text-center">COMPRA {buyTickets} BOLETOS</p>
                        <p className="text-sm text-center font-semibold mt-1">TE LLEVAS {giftTickets} DE REGALO</p>
                        {
                            buyTickets >= 10 ? <p className="text-sm text-center font-semibold mt-1">+ BONO SUPER TRIPLE BLACK DIAMOND</p>
                                : ""
                        }
                    </div>
                    <div className="h-1/5 py-1 px-4 mt-2 bg-darkGold flex justify-center align-middle items-center w-full rounded-lg">
                        <p className="font-semibold text-xs sm:text-sm">POR {total} PESOS</p>
                    </div>
                </div>
            </div>
        )
    }
}
