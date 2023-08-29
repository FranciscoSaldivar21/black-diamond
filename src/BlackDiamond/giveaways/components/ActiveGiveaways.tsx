import { useEffect, useState } from "react";
import { GiveawayCard } from "./GiveawayCard";
import axios from "axios";
import { apiURL } from "../../../api/config";
//Colocar código aqui de la API para traer los sorteos activos

export const ActiveGiveaways = ({ bgTitle = true }: props) => {
  const [giveaways, setGiveaways] = useState([]);

  const getGiveaways = async () => {
    const { data } = await axios.get(`${apiURL}giveaway/all/1`);
    setGiveaways(data);
  };

  useEffect(() => {
    getGiveaways();
  }, []);
  return (
    <div className="mt-8">
      <div className="flex justify-center">
        {
          bgTitle ?
            <div className="space-y-3">
              <p className="uppercase text-black font-bold text-lg md:text-2xl xl:text-4xl mt-1 py-2 px-10 lg:py-4 lg:px-20 bg-lightGold rounded-2xl">Autos en Dinámica</p>
              <p className="text-center text-2xl">¿Ya tienes tus fichas?</p>
            </div>
            :
            <p className="font-subTitles font-semibold text-2xl md:text-3xl mb-6 text-center">
              Autos en Dinámica
            </p>
        }
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-32 px-8 mb-6">
        {giveaways.map((giveaway) => {
          return <GiveawayCard giveaway={giveaway} key={giveaway.id} />;
        })}
      </div>
    </div>
  )
};
