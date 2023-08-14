import fichaDorada from "../../../assets/ficha-dorada.png";
import fichaGris from "../../../assets/ficha-gris.png";

export const TicketItem = ({ticket, status, onClick} : props) => {
  return (
    <div>
      {status ? (
        <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
          <img className="w-12 mb-1 pt-1" src={fichaDorada} />
          <p className="hover:font-semibold">
            {ticket}
          </p>
        </div>
      ) : (
        <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
          <img className="w-12 mb-1 pt-1" src={fichaGris} />
          <p className="hover:font-semibold line-through">
            {ticket}
          </p>
        </div>
      )}
    </div>
  );
}
