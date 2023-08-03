import { useParams } from "react-router-dom";;
import { data } from "autoprefixer";
import { useEffect } from "react";
import axios from "axios";
import { GiveawayCarrousel } from "../components/GiveawayCarrousel";
import { Layout } from "../../ui/layout/Layout";
import { giveawayStore } from '../../../store/giveawayStore';
import { Tickets } from "../components/Tickets";

export const GiveawayPage = () => {
  const { id } = useParams();
  //Guarda en el estado del sorteo
  const setGiveaway = giveawayStore((state) => state.setGiveaway);
  const { car, description, giveaway_date, creation_date, status, winner_id, tickets, ticket_price} = giveawayStore((state) => state.giveaway);

  const getGiveaway = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/giveaway/" + id
    );
    setGiveaway(data);
  };

  useEffect(() => {
    getGiveaway();
  }, []);

  return (
    <Layout>
      <div className="w-5/6 m-auto">
        <div className="">
          <p className="font-titles text-4xl">{car}</p>
        </div>
        <GiveawayCarrousel id={id}/>
        <div className="">
          <p className="mb-5 font-titles font-semibold text-xl">Especificaciones: </p>
          <p>{description}</p>
        </div>
        <div className="mt-8">
          <p className="mb-5 font-titles font-semibold text-xl">Sorteo: </p>
          <p><span className="font-semibold">Fecha de sorteo: </span>{giveaway_date}</p>
          <p><span className="font-semibold">Publicación del sorteo: </span>{creation_date}</p>
          <p><span className="font-semibold">Precio por boleto: </span>${ticket_price}</p>
          {
            status === 1 
            ? <p className="text-green-500"><span className="font-semibold text-black">Estado del sorteo: </span>Activo</p>
            : <p className="text-red-500"><span className="font-semibold text-black">Estado del sorteo: </span>Terminado</p>
          }
        </div>
        <div className="mt-8">
          <p className="mb-5 font-titles font-semibold text-xl">Boletos</p>
          <Tickets />
        </div>
      </div>
    </Layout>
  );
}
