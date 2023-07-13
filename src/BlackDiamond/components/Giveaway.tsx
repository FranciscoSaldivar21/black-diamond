
interface CarProps {
  title: string,
  description: string,
}

export const Giveaway = ({ car }: CarProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://img.remediosdigitales.com/1c4e7f/bl5a8845/1366_2000.jpeg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">The Coldest Sunset</p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="rounded w-60 h-8 mb-4 text-white transition ease-in-out delay-50 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-100">
          Ver boletos
        </button>
      </div>
    </div>
  );
}
