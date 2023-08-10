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
      <div className="mt-12 w-11/12 mx-auto">
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
            <p className="text-md md:text-xl">Costo por boleto <span className="font-bold text-md md:text-xl">$275</span></p>
            <p className="pt-1 text-sm sm:text-base text-md md:text-xl">
              En la compra de <span className="font-semibold">1</span> Boleto + <span className="font-semibold">5</span> boletos de regalo = <span className="font-semibold">6</span> oportunidades<br/>
              En la compra de <span className="font-semibold">3</span> Boletos + <span className="font-semibold">15</span> boletos de regalo = <span className="font-semibold">18</span> oportunidades<br/>
              En la compra de <span className="font-semibold">5</span> Boletos + <span className="font-semibold">25</span> boletos de regalo = <span className="font-semibold">30</span> oportunidades<br/>
              En la compra de <span className="font-semibold">8</span> Boletos + <span className="font-semibold">40</span> boletos de regalo = <span className="font-semibold">48</span> oportunidades<br/>
              En la compra de <span className="font-semibold">10</span> Boletos + <span className="font-semibold">50</span> boletos de regalo = <span className="font-semibold">60</span> oportunidades<br/>
            </p>
          </div>
          <div className="pt-10">
            <p className="mb-5 font-subTitles font-semibold text-2xl uppercase">Boletos</p>
            <Tickets />
          </div>
        </div>
      </div>
    </Layout>
  );
}
