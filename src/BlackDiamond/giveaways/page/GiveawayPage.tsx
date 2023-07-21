import { useParams } from "react-router-dom";;
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import axios from "axios";
import { GiveawayCarrousel } from "../components/GiveawayCarrousel";
import { Layout } from "../../ui/layout/Layout";

export const GiveawayPage = () => {
  const { id } = useParams();
  const [giveaway, setGiveaway] = useState({});

  const getGiveaway = async () => {
    const { data } = await axios.get("http://localhost:3000/api/giveaways/id=" + id);
    const [aux] = data;
    setGiveaway(aux);
    console.log(data)
  };

    useEffect(() => { 
      getGiveaway();
    }, []);

  return (
    <Layout>
      <div className="w-5/6 m-auto">
        <div className="">
          <p className="font-titles text-4xl">{giveaway.title} {giveaway.model}</p>
        </div>
        <GiveawayCarrousel />
        <div className="">
          <p className="mb-5 font-titles font-semibold text-xl">Especificaciones: </p>
          <p>{giveaway.description}</p>
        </div>
        <div className="mt-8">
          <p className="mb-5 font-titles font-semibold text-xl">Sorteo: </p>
          <p><span className="font-semibold">Fecha de sorteo: </span>{giveaway.giveaway_date}</p>
          <p><span className="font-semibold">Publicación del sorteo: </span>{giveaway.created_date}</p>
          {
            giveaway.status === 1 
            ? <p className="text-green-500"><span className="font-semibold text-black">Estado del sorteo: </span>Activo</p>
            : <p className="text-red-500"><span className="font-semibold text-black">Estado del sorteo: </span>Terminado</p>
          }
        </div>
        <div className="mt-8">
          <p className="mb-5 font-titles font-semibold text-xl">Boletos</p>
        </div>
      </div>
    </Layout>
  );
}
