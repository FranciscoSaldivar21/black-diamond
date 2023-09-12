import { useNavigate } from "react-router-dom";
import { userStore } from "../../../store/userStore";
import { TicketDrawer } from "../moleculs/TicketDrawer";



export const Tickets = () => {
    const navigate = useNavigate()
    const id = userStore((state) => state.id);
  return (
    <div className="w-full mt-8">
      {id ? (
        <TicketDrawer/>
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
