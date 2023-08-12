import { useLocation } from "react-router-dom";
import { Layout } from "../../ui/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { BuyTickest } from "../components/BuyTickest";
import { userStore } from "../../../store/userStore";


export const SalePage = () => {
    const token = userStore((state) => state.token);
    const reset = userStore((state) => state.reset);
    const [isLoading, setIsLoading] = useState(true);
    const [sale, setSale] = useState({});
    const [total, setTotal] = useState(0);
    const [tickets, setTickets] = useState([]);
    const location = useLocation();

    //Extraer parametro para mostrar datos
    const saleId = location.state.saleId;

    const getSaleData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/api/sales/getSaleById/${saleId}`, {
                headers: {
                    "x-token": token,
                },
            });
            setSale(data.saleData);
            setTickets(data.ticketsData);
            setIsLoading(false);
            
        } catch (error) {
            console.log(error.response.data);
            if(error.response.data.ok === false)
                reset();
        }
    }

    useEffect(() => {
        getSaleData();
        
        //Total de compra
        const total = tickets.reduce((sum, current) => sum + current.ticket_price, 0);
        setTotal(total);
    }, [isLoading])
    
  return (
    <Layout>
        <div className="w-11/12 mx-auto mt-8 mb-4">
            <p className="text-4xl font-titles uppercase md:text-5xl mb-8">Tu compra</p>
            <p className="text-justify md:text-lg">Gracias por tu compra, espera la fecha del sorteo para ver el ganador.</p>
            <p className="text-justify md:text-lg">Te recomendamos actualizar tus datos de contacto, ya que si eres ganador nos comunicaremos por esos medios contigo.</p>
            <p className="uppercase mt-4 md:text-lg">!Te deseamos mucha suerte!</p>
            <div className="mt-8">
                <p className="text-xl font-semibold uppercase font-subTitles md:text-3xl mb-6">Detalles de tu compra</p>
                <p><span className="font-bold md:text-lg">ID de compra: </span>{ sale.id }</p>
                <p><span className="font-bold md:text-lg">Fecha de compra: </span>{ sale.sale_date }</p>
                <p><span className="font-bold md:text-lg">Total de compra: </span>${ total }</p>
            </div>
            <div className="mt-4">
                <p className="text-xl font-semibold uppercase font-subTitles md:text-3xl mb-2">Sorteo </p>
                <p className="md:text-lg"><span className="font-bold md:text-lg">Auto: </span>{ sale.car }</p>
                <p className="md:text-lg"><span className="font-bold md:text-lg">Descripción del auto: </span>{ sale.description }</p>
                <p className="md:text-lg"><span className="font-bold md:text-lg">Fecha de registro del sorteo: </span>{ sale.creation_date }</p>
                <p className="md:text-lg"><span className="font-bold md:text-lg">Fecha del sorteo: </span>{ sale.giveaway_date }</p>
                {
                    sale.status === 1 ? <p className="text-green-600"><span className="text-black font-bold md:text-lg">Estatus del sorteo: </span>Activo</p>
                    : <p className="text-red-600"><span className="text-black font-bold md:text-lg">Estatus del sorteo: </span>Inactivo</p>
                }
                
            </div>
            <div className="mt-4 uppercase font-extrabold md:text-lg">
                {
                    tickets.length >= 10 ? <p className="text-darkGold">Tienes beneficio SUPER TRIPLE BLACK DIAMOND por comprar más de 10 boletos.</p>
                    : ""
                }
                {
                    sale.benefic === 1 ? <p>Tienes beneficio GOLD DIAMOND por comprar en la primer semana</p>
                    : sale.benefic === 2 ? <p>Tienes beneficio SILVER DIAMOND por comprar en la segunda semana</p>
                        :sale.benefic === 3 ? <p>Tienes beneficio BRONZE DIAMOND por comprar en la tercer semana</p>
                        : ""
                }
                <BuyTickest data={tickets} benefic={sale.benefic}/>
            </div>
        </div>
    </Layout>
  )
}
