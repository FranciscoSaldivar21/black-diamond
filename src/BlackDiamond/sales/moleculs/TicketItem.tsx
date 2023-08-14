import fichaDorada from "../../../assets/ficha-dorada.png";
import fichaGold from "../../../assets/ficha-gold.png";
import fichaSilver from "../../../assets/ficha-silver.png";
import fichaBronze from "../../../assets/ficha-bronze.png";
import fichaGris from "../../../assets/ficha-gris.png";

export const TicketItem = ({ ticketNumber, onClick, color }: props) => {
  //1 ficha de compra (oro) 0 ficha gris  2 ficha negro/oro  3 ficha negro/plata  4 ficha negro/bronce

  if (color === 0) {
    return (
      <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
        <img className="w-12 mb-1 pt-1" src={fichaDorada} />
        <p className="hover:font-semibold font-normal">
          {ticketNumber}
        </p>
      </div>
    );
  }
  else if (color === -1) {
    return (
      <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
        <img className="w-12 mb-1 pt-1" src={fichaGris} />
        <p className="hover:font-semibold line-through font-normal">
          {ticketNumber}
        </p>
      </div>
    );
  }
  else if (color === 1) {
    return (
      <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
        <img className="w-12 mb-1 pt-1" src={fichaGold} />
        <p className="hover:font-semibold font-normal">
          {ticketNumber}
        </p>
      </div>
    );
  }
  else if (color === 2) {
    return (
      <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
        <img className="w-12 mb-1 pt-1" src={fichaSilver} />
        <p className="hover:font-semibold font-normal">
          {ticketNumber}
        </p>
      </div>
    );
  }
  else if (color === 3) {
    return (
      <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
        <img className="w-12 mb-1 pt-1" src={fichaBronze} />
        <p className="hover:font-semibold font-normal">
          {ticketNumber}
        </p>
      </div>
    );
  }
}
