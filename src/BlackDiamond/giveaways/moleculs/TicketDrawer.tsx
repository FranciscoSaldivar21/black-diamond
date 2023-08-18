import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { giveawayStore } from "../../../store/giveawayStore";
import { TicketItem } from "./TicketItem";
import { userStore } from "../../../store/userStore";
import axios from "axios";
import { data } from 'autoprefixer';
import { apiURL } from "../../../api/config";

export const TicketsDrawer = (data: props) => {
    const token = userStore((state) => state.token);
    const userEmail = userStore((state) => state.email);
    const resetSession = userStore((state) => state.reset);

    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    //Alerta en pantalla
    const [textAlert, setTextAlert] = useState("");
    const [textAlert2, setTextAlert2] = useState("");

    //Extraer total de tickets
    const { id, tickets: totalTickets, ticket_price, creation_date } = giveawayStore((state) => state.giveaway);
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

    //Variable para busqueda
    const [search, setSearch] = useState("");
    const [ticketSearch, setTicketSearch] = useState(null);
    const [ticketFound, setTicketFound] = useState(false);


    //Función para guardar boleto
    const handleTicketPressed = async (ticket) => {
        //Si no está atutenticado no dejamos guardar el boleto
        if (!idUser) {
            alert("Debes iniciar sesión para poder seleccionar boletos");
            return;
        }

        if (soldTickets.includes(parseInt(ticket)) || ticketFound) {
            alert("Boleto no disponible");
            return;
        }

        if (!selectedTickets.includes(parseInt(ticket))) {
            setSelectedTickets((prevTickets) => [...prevTickets, ticket]);
            setSearch("");
            setTicketSearch(null);
            setTicketFound(false);
        }

    };

    //Eliminar elementos selccionados al dar click
    const handleDeleteTicket = (ticket) => {
        const aux = selectedTickets.filter((item) => item !== ticket);
        setSelectedTickets(aux);
    }


    //Extraer tickets vendidos
    const getTickets = async (offset) => {
        try {
            const { data } = await axios.get(`${apiURL}giveaway/tickets/${id}/${offset}`);
            //Recorrer arreglo para guardar boletos
            data.forEach((element, i) => {
                setSoldTickets((prevTickets) => [...prevTickets, element.ticket_number]);
            });
            setIsLoading(false);
        } catch (error) {
        }
    }

    const searchTickets = async (ticket) => {
        if(ticket > totalTickets){
            alert(`Elige un rango menor a ${totalTickets}`)
            return;
        }

        if(ticket <= 0){
            alert(`Elige un rango mayor a 0`);
            return;
        }

        setTicketSearch(ticket);
        if(ticket && ticket > 0 && ticket <= totalTickets){
            try {
                const { data } = await axios.get(`${apiURL}giveaway/ticket/${id}/${ticket}`);
                setTicketFound(data.found);
            } catch (error) {
            }
        }

        return;
    }

    //Función para generar la compra
    const handleBuyClick = async () => {
        const pageConfirm = confirm("¿Desea terminar la compra?");

        if(!pageConfirm){
            setTextAlert("Debe aceptar para generar la orden de compra");
            setTimeout(() => {
                setTextAlert("");
            }, 4000);
            return;
        }
        //Comparar fechas
        //Fecha actual de la compra
        let actualDate = new Date().getTime();

        //Cambiar orden de dd/mm/yy a mm/dd/yy
        const auxGiveawayDate = creation_date.split("/");
        //Crear fecha en el formato y obtener milisegundos + 3 días + 20 horas para el primer beneficio (GOLD)
        const gold = new Date(`${auxGiveawayDate[1]}/${auxGiveawayDate[0]}/${auxGiveawayDate[2]}`).getTime() + 331200000;
        //6 días + 20 horas (SILVER)
        const silver = new Date(`${auxGiveawayDate[1]}/${auxGiveawayDate[0]}/${auxGiveawayDate[2]}`).getTime() + (2 * 331200000);
        //9 días + 20 horas (BRONZE)
        const bronze = new Date(`${auxGiveawayDate[1]}/${auxGiveawayDate[0]}/${auxGiveawayDate[2]}`).getTime() + (3 * 331200000);


        //Beneficio que se enviará
        let giveawayBenefic = 0;

        if(actualDate <= gold)
            giveawayBenefic = 1
        else if(actualDate <= silver)
            giveawayBenefic = 2
        else if(actualDate <= bronze)
            giveawayBenefic = 3

        const data = {
            tickets : selectedTickets,
            ticketPrice : ticket_price,
            userEmail,
            giveawayBenefic
        }

        try {
            const response = await axios.post(`${apiURL}sales/create-checkout-session/${id}/${idUser}`, data, {
                headers: {
                    "x-token": token,
                },
            });
            navigate("/sale", {
                state: {
                    saleId: response.data.saleId
                }
            });
        } catch (error) {
            const {response} = error;
            setTextAlert(response.data.error);
            setTimeout(() => {
                setTextAlert("");
                setSelectedTickets([]);
            }, 4000);
        }
    }

    useEffect(() => {
        if(selectedTickets.length > 2 && selectedTickets.length < 5)
            setTextAlert2("Tienes 7 boletos de regalo");
        if(selectedTickets.length >= 5 && selectedTickets.length < 8)
            setTextAlert2("Tienes 15 boletos de regalo");
        if(selectedTickets.length >= 8 && selectedTickets.length < 10)
            setTextAlert2("Tienes 22 boletos de regalo");
        if(selectedTickets.length >= 10)
            setTextAlert2("Tienes 30 boletos de regalo y bono SUPER TRIPLE BLACK DIAMOND");
        
    }, [selectedTickets]);

    useEffect(() => {
        setSoldTickets([]);
        //Extraer tickets vendidos
        getTickets(ticketsOffset);
        //Reiniciar arrays para paginación
        setTickets([]);

        //Definir donde inicia y termina la paginación
        const start = parseInt(ticketsOffset) * 500 + 1;
        const limit = (parseInt(ticketsOffset) + 1) * 500;

        //Guardar elementos en arreglo que se dibujará
        for (let i = start; i <= limit; i++) {
            if(i > data.totalTickets)
                break;
            setTickets((prevTickets) => [...prevTickets, i]);
        }
    }, [ticketsOffset, selectedTickets, isLoading]);


    return (
        <div className="mb-8">
            {
                selectedTickets.length > 0 ?
                    <div>
                        <p>Boletos seleccionados: </p>
                        <div className="mt-3 grid grid-cols-5 gap-x-2 gap-y-4 mb-4 sm:grid-cols-10 md:grid-cols-12 xl:grid-cols-18">
                            {
                                selectedTickets.map((element) => {
                                    return <button onClick={() => handleDeleteTicket(element)} className="ml-1 px-2 border border-solid border-black rounded-md bg-lightGold" key={element}>{element}</button>
                                })
                            }
                        </div>
                        <p className="text-red-500">Para quitar un boleto vuelve a presionarlo</p>
                        <p className="text-red-600">{textAlert}</p>
                        <p className="text-green-500">{textAlert2}</p>
                        <button onClick={() => handleBuyClick()} className="bg-blue-600 py-1 px-2 rounded-md my-5 text-white hover:font-bold hover:bg-blue-700">Terminar compra</button>
                    </div>
                    : ''
            }
            <div className="mx-auto sm:flex sm:flex-row sm:items-center">
                <label>Elige un rango de boletos</label>
                <select
                    onChange={({ target }) => setTicketsOffset(target.value)}
                    className="ml-2 border rounded-md sm:px-3 sm:py-2 sm:mr-4 bg-gray-50 border-gray-300 px-1 py-1"
                >
                    {offsetRange.map((element) => {
                        return (
                            <option key={element} value={element}>
                                {element * 500 + 1}-{(element + 1) * 500}
                            </option>
                        );
                    })}
                </select>
                <div className="relative mt-4 sm:mt-0">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="number" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Buscar boleto" value={search} onChange={({target}) => setSearch(target.value)}/>
                    <button onClick={() => searchTickets(search)} type="submit" className="text-black absolute right-1 bottom-1 bg-darkGold hover:font-bold font-medium rounded-lg text-sm px-2 py-1">Buscar</button>
                </div>
            </div>
            <p className="mt-4 font-semibold">Da click en el boleto deseado para seleccionarlo</p>
            <div className="grid grid-cols-6 md:grid-cols-8 xl:grid-cols-12 gap-1.5 mx-auto mt-4">
                {
                    ticketSearch ?
                    <TicketItem ticket={ticketSearch} status={!ticketFound} onClick={() => handleTicketPressed(ticketSearch)} />
                    :
                    tickets.map((ticket, i) => {
                        if (soldTickets.includes(tickets[i]))
                            return (
                                <TicketItem
                                    key={i}
                                    ticket={ticket}
                                    status={false} //Inactivo
                                    onClick={() => handleTicketPressed(ticket)}
                                />
                            );
                        return (
                            <TicketItem
                                key={i}
                                ticket={ticket}
                                status={true} //Activo
                                onClick={() => handleTicketPressed(ticket)}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};
