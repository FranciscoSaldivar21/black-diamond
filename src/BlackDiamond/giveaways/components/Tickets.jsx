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
    for (let i = 0; pages < totalTickets; pages += 500) {
        arrayOffset.push(i);
        i++;
    }
  return (
    <div>
      {id ? (
        <TicketsDrawer offsetRange={arrayOffset} totalTickets={totalTickets} />
      ) : (
        <div>
          <p className="text-black text-sm sm:text-base text-md md:text-xl">
            <span
              onClick={() => navigate("/auth")}
              className="text-darkGold cursor-pointer font-semibold hover:text-yellow-700 text-sm sm:text-base text-md md:text-xl"
            >
              Inicia sesión{" "}
            </span>{" "}
            para ver los boletos disponibles
          </p>
        </div>
      )}
    </div>
  );
}
