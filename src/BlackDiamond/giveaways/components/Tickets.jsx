import { useNavigate } from "react-router-dom";
import { giveawayStore } from "../../../store/giveawayStore";
import { userStore } from "../../../store/userStore";
import { TicketsDrawer } from "../moleculs/TicketDrawer";



export const Tickets = () => {
    const navigate = useNavigate();
    //Este proceso se realiza para pasar el numero de páginas necesarias como prop para la paginación de mil en mil boletos
    const { tickets: totalTickets } = giveawayStore((state) => state.giveaway);
    const id = userStore((state) => state.id);

    let arrayOffset = [];
    let pages = 0;
    for (let i = 0; pages < totalTickets; pages += 1000) {
        arrayOffset.push(i);
        i++;
    }
  return (
    <div>
      {
        id ? <TicketsDrawer offsetRange={arrayOffset} />
        : <div>
            <p className="text-black"><span onClick={() => navigate("/auth")} className="text-darkGold cursor-pointer font-semibold">Inicia sesión </span> para ver los boletos disponibles</p>
          </div>
      }

    </div>
  );
}
