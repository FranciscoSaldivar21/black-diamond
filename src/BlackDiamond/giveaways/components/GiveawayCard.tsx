import { useNavigate } from "react-router-dom";
import { GiveawaysPage } from "../page/GiveawaysPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../../api/config";

interface ICarProps {
  id: number,
  title: string,
  description: string,
  status: number,
  created_date: string,
  giveaway_date: string,
  model: number,
  winner_id ?: string 
}

export const GiveawayCard = ({ giveaway } : ICarProps) => {
  const navigate = useNavigate();

  const [monthName, setMonthName] = useState("");


  useEffect(() => {
    switch (parseInt(giveaway.giveaway_date.split("/")[1])) {
      case 1:
        setMonthName("Enero");
        break;
      case 2:
        setMonthName("Febrero");
        break;
      case 3:
        setMonthName("Marzo");
        break;
      case 4:
        setMonthName("Abril");
        break;
      case 5:
        setMonthName("Mayo");
        break;
      case 6:
        setMonthName("Junio");
        break;
      case 7:
        setMonthName("Julio");
        break;
      case 8:
        setMonthName("Agosto");
        break;
      case 9:
        setMonthName("Septiembre");
        break;
      case 10:
        setMonthName("Octubre");
        break;
      case 11:
        setMonthName("Noviembre");
        break;
      case 12:
        setMonthName("Diciembre");
        break;
      default:
        setMonthName("");
        break;
    }
  }, []);

  const handleButtonPress = () => {
    navigate(`/giveaway/${giveaway.id}`);  
  }

  return (
    <div>
      <img
        className="w-full"
        src={"https://www.pngplay.com/wp-content/uploads/13/Ford-Mustang-Shelby-GT350-Download-Free-PNG.png"}
        alt="Car image"
      />
      <div className="px-6 py-4 flex flex-col justify-center items-center">
        <p className="mb-2 font-bold text-lightGold text-2xl">{monthName}</p>
        <p className="font-bold text-lg mb-2 uppercase">{giveaway.car}</p>
        <p className="mb-2">Consigue tus fichas</p>
      </div>
      <div className="flex justify-center align-bottom">
        <button
          onClick={handleButtonPress}
          className="rounded-3xl px-4 font-bold h-8 mb-4 text-lightGold transition ease-in-out delay-50 bg-black"
        >
          Comprar Ficha
        </button>
      </div>
    </div>
  );
}
