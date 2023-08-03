import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { giveawayStore } from "../../../store/giveawayStore";
import { TicketItem } from "./TicketItem";
import { userStore } from "../../../store/userStore";
import axios from "axios";
import { data } from 'autoprefixer';

export const TicketsDrawer = (data: props) => {
    const token = userStore((state) => state.token);
    const resetSession = userStore((state) => state.reset);

    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    //Alerta en pantalla
    const [textAlert, setTextAlert] = useState("");

    //Extraer total de tickets
    const { id, tickets: totalTickets, ticket_price } = giveawayStore((state) => state.giveaway);
    const idUser = userStore((state) => (state.id));

    //Variable que controla donde va la paginación
    const [ticketsOffset, setTicketsOffset] = useState(0);

    //Cantidad de paginas de la paginación
    const offsetRange = data.offsetRange;

    //Array para dibujar todos los boletos
    const [tickets, setTickets] = useState([]);

    //Hacer llamado a API para obtener los boletos vendidos de cada sorteo
    const [soldTickets, setSoldTickets] = useState([]);

    //Array para tickets seleccionados
    const [selectedTickets, setSelectedTickets] = useState([]);

    //Función para guardar boleto
    const handleTicketPressed = async (ticket) => {
        //Si no está atutenticado no dejamos guardar el boleto
        if (!idUser) {
            alert("Debes iniciar sesión para poder seleccionar boletos");
            return;
        }

        if (soldTickets.includes(ticket)) {
            alert("Boleto no disponible");
            return;
        }

        if (!selectedTickets.includes(ticket)) {
            setSelectedTickets((prevTickets) => [...prevTickets, ticket]);
        }

    };

    //Eliminar elementos selccionados al dar click
    const handleDeleteTicket = (ticket) => {
        const aux = selectedTickets.filter((item) => item !== ticket);
        setSelectedTickets(aux);
    }


    //Extraer tickets vendidos
    const getTickets = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/api/giveaway/tickets/${id}`);
            //Recorrer arreglo para guardar boletos
            data.forEach((element, i) => {
                setSoldTickets((prevTickets) => [...prevTickets, element.ticket_number]);
            });
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


    //Función para generar la compra
    const handleBuyClick = async () => {
        const response = confirm("Serás redirigido a una pagína donde podrás hacer tu pago seguro. ¿Deseas continuar?");

        if(!response){
            setTextAlert("Debes aceptar para poder realizar tu pago");
            setTimeout(() => {
                setTextAlert("");
            }, 4000);
            return;
        }

        const data = {
            tickets : selectedTickets,
            ticketPrice : ticket_price,
        }

        try {
            const resp = await axios.post(`http://localhost:3000/api/sales/create-checkout-session/${id}/${idUser}`, data, {
                headers: {
                    "x-token": token,
                },
            });
            console.log(resp.data);
            console.log(resp.data.saleId);
            navigate('/sale', {
                state: {
                    saleId : resp.data.saleId
                }
            })
        } catch (error) {
            console.log(error)

            const {response} = error;
            setTextAlert(response.data.error);
            setTimeout(() => {
                setTextAlert("");
                setSelectedTickets([]);
            }, 4000);
        }
    }


    useEffect(() => {
        setSoldTickets([]);
        //Extraer tickets vendidos
        getTickets();
        //Reiniciar arrays para paginación
        setTickets([]);

        //Definir donde inicia y termina la paginación
        const start = parseInt(ticketsOffset) * 1000 + 1;
        const limit = (parseInt(ticketsOffset) + 1) * 1000;

        //Guardar elementos en arreglo que se dibujará
        for (let i = start; i <= limit; i++) {
            setTickets((prevTickets) => [...prevTickets, i]);
        }
    }, [ticketsOffset, selectedTickets, isLoading]);


    return (
        <div>
            {
                selectedTickets.length > 0 ?
                    <div>
                        <div className="flex mb-4">
                            <p>Boletos seleccionados: </p>
                            {
                                selectedTickets.map((element) => {
                                    return <button onClick={() => handleDeleteTicket(element)} className="ml-1 px-2 border border-solid border-black rounded-md" key={element}>{element}</button>
                                })
                            }
                        </div>
                        <p>Para quitar el boleto vuelve a presionarlo</p>
                        <p className="text-red-500">{textAlert}</p>
                        <button onClick={() => handleBuyClick()} className="bg-blue-600 py-1 px-2 rounded-md my-5 text-white hover:font-bold hover:bg-blue-700">Terminar compra</button>
                    </div>
                    : ''
            }
            <div className="mx-auto">
                <label>Elige un rango de boletos</label>
                <select
                    onChange={({ target }) => setTicketsOffset(target.value)}
                    className="ml-5 mb-4 border border-black rounded-md px-2 py-1"
                >
                    {offsetRange.map((element) => {
                        return (
                            <option key={element} value={element}>
                                {element * 1000 + 1}-{(element + 1) * 1000}
                            </option>
                        );
                    })}
                </select>
                <p>Da click en el boleto deseado para seleccionarlo</p>
            </div>
            <div className="grid grid-cols-12 gap-1.5 mx-auto mt-4">
                {tickets.map((ticket, i) => {
                    if (soldTickets.includes(tickets[i]))
                        return (
                            <TicketItem
                                key={i}
                                ticket={ticket}
                                status={false}
                                onClick={() => handleTicketPressed(ticket)}
                            />
                        );
                    return (
                        <TicketItem
                            key={i}
                            ticket={ticket}
                            status={true}
                            onClick={() => handleTicketPressed(ticket)}
                        />
                    );
                })}
            </div>
        </div>
    );
};
