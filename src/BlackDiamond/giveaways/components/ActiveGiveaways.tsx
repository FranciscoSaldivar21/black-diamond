import { useEffect, useState } from "react";
import { GiveawayCard } from "./GiveawayCard";
import axios from "axios";
//Colocar código aqui de la API para traer los sorteos activos

export const ActiveGiveaways = ({margin = true} : props) => {
  console.log("Margin " + margin)
  const [giveaways, setGiveaways] = useState([]);

  const getGiveaways = async () => {
    const { data } = await axios.get("http://localhost:3000/api/giveaway/all/1");
    setGiveaways(data);
  };

  useEffect(() => {
    getGiveaways();
  }, []);
  return giveaways.length > 0 ? (
    <div className="mt-8">
      <div>
        <h1 className="font-subTitles font-semibold text-2xl md:text-3xl mb-6 uppercase">
          Sorteos activos
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-auto gap-6 mt-4">
        {giveaways.map((giveaway) => {
          return <GiveawayCard giveaway={giveaway} key={giveaway.id} />;
        })}
      </div>
    </div>
  ) : (
    margin ? <div className="h-[300px] md:h-[425px]"></div> : ""
  );
};
