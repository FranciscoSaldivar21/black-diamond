import { useEffect, useState } from "react";
import { GiveawayCard } from "./GiveawayCard";
import axios from "axios";
import { apiURL } from "../../../api/config";
//Colocar código aqui de la API para traer los sorteos activos

export const ActiveGiveaways = ({margin = true} : props) => {
  const [giveaways, setGiveaways] = useState([]);

  const getGiveaways = async () => {
    const { data } = await axios.get(`${apiURL}giveaway/all/1`);
    setGiveaways(data);
  };

  useEffect(() => {
    getGiveaways();
  }, []);
  return giveaways.length > 0 ? (
    <div className="mt-12">
      <div>
        <h1 className="font-subTitles font-semibold text-2xl md:text-3xl mb-6 text-center">
          Autos en Dinámica
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-32 mt-4 px-8">
        {giveaways.map((giveaway) => {
          return <GiveawayCard giveaway={giveaway} key={giveaway.id} />;
        })}
      </div>
    </div>
  ) : (
    margin ? <div className="h-[300px] md:h-[425px]"></div> : ""
  );
};
