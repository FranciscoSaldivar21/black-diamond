import { InfoCard } from "../moleculs/InfoCard";


const infoArray = [
  {
    title: "Objetivo",
    body: "Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente",
    image: "",
  },
  {
    title: "Visión",
    body: "Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente",
    image: "",
  },
  {
    title: "Misión",
    body: "Ser una de las empresas mas importantes del sector, brindando a nuestros clientes fiabilidad, seguridad y sobre todo comodidad para participar en nuestros sorteos, marcando una diferencia con nuestra competencia a través de nuestra forma de trabajar y la experiencia que se le brindará al cliente",
    image: "",
  }
];
export const Information = () => {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        infoArray.map(element => {
          return <InfoCard key={element.title} title={element.title} body={element.body} image={element.title} />;
        })
      }
    </div>
  );
};
