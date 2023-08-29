import { InfoCard } from "../moleculs/InfoCard";
import mision from "../../../assets/mision.jpg";
import vision from "../../../assets/vision.jpg";
import objetive from "../../../assets/objetive.jpg";


const infoArray = [
  {
    title: "Misión",
    body: "Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente",
    image: mision,
  },
  {
    title: "Visión",
    body: "Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente",
    image: vision,
  },
  {
    title: "Objetivo",
    body: "Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente",
    image: objetive,
  }
];
export const Information = () => {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        infoArray.map(element => {
          return <InfoCard key={element.title} title={element.title} body={element.body} image={element.image} />;
        })
      }
    </div>
  );
};
