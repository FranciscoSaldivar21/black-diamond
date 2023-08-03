import { useEffect, useState } from "react";
import { GiveawayCard } from "./GiveawayCard";
import axios from "axios";
//Colocar código aqui de la API para traer los sorteos activos

export const ActiveGiveaways = () => {
  const [giveaways, setGiveaways] = useState([]);

  const getGiveaways = async () => {
    const { data } = await axios.get("http://localhost:3000/api/giveaway/all/1");
    setGiveaways(data);
  };

  useEffect(() => {
    getGiveaways();
  }, []);
  return (
    <div className="ml-20">
      <div>
        <h1 className="font-titles text-3xl mb-6 uppercase">Sorteos activos</h1>
      </div>
      <div className="flex flex-col mt-8 items-left w-full">
        <div className="grid grid-cols-3 gap-4 mt-4 mb-12">
          {
            giveaways.map((giveaway) => {
              return <GiveawayCard giveaway={giveaway} key={giveaway.id} />;
            })
          }
        </div>
      </div>
    </div>
  );
};
