import { useLocation } from "react-router-dom";
import { Layout } from "../../ui/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { BuyTickest } from "../components/BuyTickest";
import { userStore } from "../../../store/userStore";


export const SalePage = () => {
    const token = userStore((state) => state.token);
    const [isLoading, setIsLoading] = useState(true);
    const [sale, setSale] = useState({});
    const [total, setTotal] = useState(0);
    const [tickets, setTickets] = useState([]);
    const location = useLocation();

    //Extraer parametro para mostrar datos
    const saleId = location.state.saleId;
    console.log(saleId);

    const getSaleData = async () => {
        const { data } = await axios.get(`http://localhost:3000/api/sales/getSaleById/${saleId}`, {
            headers: {
                "x-token": token,
            },
        });
        setSale(data.saleData);
        setTickets(data.ticketsData);
        setIsLoading(false);
    }

    useEffect(() => {
        getSaleData();
        
        //Total de compra
        const total = tickets.reduce((sum, current) => sum + current.ticket_price, 0);
        setTotal(total);
    }, [isLoading])
    
  return (
    <Layout>
        <div className="w-11/12 mx-auto">
            <p className="text-3xl font-bold mb-8">Tu compra</p>
            <p>Gracias por tu compra, espera la fecha del sorteo para ver el ganador.</p>
            <p>Te recomendamos actualizar tus datos de contacto, ya que si eres ganador nos comunicaremos por esos medios contigo.</p>
            <p className="uppercase">!Te deseamos mucha suerte!</p>
            <div className="mt-8">
                <p className="text-xl font-semibold">Detalles de tu compra</p>
                <p><span className="font-bold">ID de compra: </span>{ sale.id }</p>
                <p><span className="font-bold">Fecha de compra: </span>{ sale.sale_date }</p>
                <p><span className="font-bold">Total de compra: </span>${ total }</p>
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold">Sorteo </p>
                <p><span className="font-bold">Auto: </span>{ sale.car }</p>
                <p><span className="font-bold">Descripción del auto: </span>{ sale.description }</p>
                <p><span className="font-bold">Fecha de registro del sorteo: </span>{ sale.creation_date }</p>
                <p><span className="font-bold">Fecha del sorteo: </span>{ sale.giveaway_date }</p>
                {
                    sale.status === 1 ? <p className="text-green-6 00"><span className="text-black font-bold">Estatus del sorteo: </span>Activo</p>
                    : <p className="text-red-6 00"><span className="text-black font-bold">Estatus del sorteo: </span>Inactivo</p>
                }
                
            </div>
            <div className="mt-8">
                <p className="text-xl font-semibold">Boletos comprados <span>({ tickets.length })</span></p>
                <BuyTickest data={tickets} />
            </div>
        </div>
    </Layout>
  )
}
