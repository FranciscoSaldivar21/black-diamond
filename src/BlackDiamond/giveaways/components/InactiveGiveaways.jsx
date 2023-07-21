import axios from "axios";
import { useEffect, useState } from "react";
import { GiveawayCard } from "./GiveawayCard";


export const InactiveGiveaways = () => {
  const [giveaways, setGiveaways] = useState([]);

  const getGiveaways = async () => {
    const { data } = await axios.get("http://localhost:3000/api/giveaways/0");
    setGiveaways(data);
  };

  useEffect(() => {
    getGiveaways();
  }, []);
  return (
    <>
      <div className="w-11/12 mx-auto">
        <h1 className="font-titles text-3xl mb-6 uppercase">Sorteos anteriores</h1>
      </div>
      <div className="flex flex-col mt-8 justify-center items-center mx-auto w-full">
        <div className="grid grid-cols-3 gap-4 mt-4 mb-12">
          {giveaways.map((giveaway) => {
            return <GiveawayCard giveaway={giveaway} key={giveaway.id} />;
          })}
        </div>
      </div>
    </>
  );
}
