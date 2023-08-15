import { useParams } from "react-router-dom";;
import { data } from "autoprefixer";
import { useEffect } from "react";
import axios from "axios";
import { GiveawayCarrousel } from "../components/GiveawayCarrousel";
import { Layout } from "../../ui/layout/Layout";
import { giveawayStore } from '../../../store/giveawayStore';
import { Tickets } from "../components/Tickets";
import { Promotions } from "../components/Promotions";
import { apiURL } from "../../../api/config";

export const GiveawayPage = () => {
  const { id } = useParams();
  //Guarda en el estado del sorteo
  const setGiveaway = giveawayStore((state) => state.setGiveaway);
  const { car, description, giveaway_date, creation_date, status, winner_id, tickets, ticket_price} = giveawayStore((state) => state.giveaway);

  const getGiveaway = async () => {
    const { data } = await axios.get(
      `${apiURL}giveaway/${id}`
    );
    setGiveaway(data);
  };

  useEffect(() => {
    getGiveaway();
  }, []);

  return (
    <Layout>
      <div className="mt-12 w-11/12 mx-auto md:mb-5">
        <div className="">
          <p className="font-titles text-3xl sm:text-4xl lg:text-5xl uppercase">{car}</p>
        </div>
        <GiveawayCarrousel id={id}/>
        <div className="">
          <p className="mb-5 font-subTitles font-semibold text-2xl uppercase">Especificaciones: </p>
          <p className="text-md md:text-xl">{description}</p>
        </div>
        <div className="mt-8">
          <p className="mb-5 font-subTitles font-semibold text-2xl uppercase">Sorteo: </p>
          <p className="text-md md:text-xl"><span className="font-semibold text-md md:text-xl">Fecha de sorteo: </span>{giveaway_date}</p>
          <p className="text-md md:text-xl"><span className="font-semibold text-md md:text-xl">Publicación del sorteo: </span>{creation_date}</p>
          <p className="text-md md:text-xl"><span className="font-semibold text-md md:text-xl">Precio por boleto: </span>${ticket_price}</p>
          {
            status === 1 
              ? <p className="text-green-500 text-md md:text-xl"><span className="font-semibold text-black text-md md:text-xl">Estado del sorteo: </span>Activo</p>
              : <p className="text-red-500 text-md md:text-xl"><span className="font-semibold text-black text-md md:text-xl">Estado del sorteo: </span>Terminado</p>
          }
        </div>
        <div className="mt-8">
          <div>
            <Promotions />
          </div>
          <div className="pt-5">
            <p className="mb-5 font-subTitles font-semibold text-2xl uppercase">Boletos</p>
            <Tickets />
          </div>
        </div>
      </div> 
    </Layout>
  );
}
