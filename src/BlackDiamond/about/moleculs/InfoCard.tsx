import prueba from "../../../assets/black-diamond.png";

export const InfoCard = ({title, image, body}) => {
  return (
    <div className="bg-black rounded-xl flex flex-col justify-center items-center py-6 px-4">
        <img src={prueba} className="w-20"/>
        <h3 className="text-lightGold font-bold text-2xl uppercase pt-4">{ title }</h3>
        <p className="pt-4 text-center text-white text-lg">{ body }</p>
    </div>
  )
}
