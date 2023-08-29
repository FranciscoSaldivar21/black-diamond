import { BonusCard } from "../moleculs/BonusCard";
import gold from "../../../assets/fase-gold.png";
import silver from "../../../assets/fase-silver.png";
import bronze from "../../../assets/fase-bronze.png";


const array = [
    {
        title: "1 Fase Bono",
        subTitle: "black diamond gold",
        body: "placas| seguro| bono sorpresa estimado en $150,000",
        image: gold
    },
    {
        title: "2 Fase Bono",
        subTitle: "black diamond silver",
        body: "placas| bono sorpresa estimado en $100,000",
        image: silver
    },
    {
        title: "3 Fase Bono",
        subTitle: "black diamond bronze",
        body: "permiso de 30 días|bono sorpresa estimado en $50,000",
        image: bronze
    }
]

export const BonusByTicket = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="uppercase text-black text-center font-bold text-lg md:text-2xl xl:text-4xl mt-10 py-2 px-4 md:px-10 lg:py-4 lg:px-24 bg-lightGold rounded-2xl">
        Bono sorpresa para boleto ganador
      </p>
      <div className="w-11/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-6">
        {array.map((e) => {
          return (
            <BonusCard
              key={e.title}
              title={e.title}
              subTitle={e.subTitle}
              body={e.body}
              image={e.image}
            />
          );
        })}
      </div>
    </div>
  );
}
