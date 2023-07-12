import { Giveaway } from "../components/Giveaway";
//Colocar código aqui de la API para traer los sorteos activos

export const ActiveGiveaways = () => {
  return (
    <div className="flex-row mt-32">
      <h1 className="font-titles text-4xl">Sorteos activos</h1>
      <div className="grid grid-cols-3 gap-4 mt-4 mb-12">
        <Giveaway />
        <Giveaway />
        <Giveaway />
        <Giveaway />
        <Giveaway />
        <Giveaway />
        <Giveaway />
        <Giveaway />
        <Giveaway />
      </div>
    </div>
  );
}
