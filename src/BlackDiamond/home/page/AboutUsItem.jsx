

export const AboutUsItem = () => {
  return (
    <div className="w-full bg-black grid grid-cols-1 lg:grid-cols-2">
        <div className="px-12 py-6 lg:px-32 flex flex-col justify-center">
            <p className="text-3xl text-lightGold font-bold uppercase">SOMOS BLACK DIAMOND</p>
            <p className="text-white text-lg mt-1">Estamos enfocados en la rifa y sorteo de vehículos de alta gama para que por medio de poca inversión puedas tener el coche que siempre has soñado.</p>
            <p className="text-white text-lg mt-2">Somos una empresa 100% mexicana ubicada en Guadalajara Jalisco dedicada al sorteo y rifa de vehículos de gama premium.</p>
        </div>
        <div className="flex justify-center items-center bg-red-400 h-80">
            <p className="text-black">Un video</p>
        </div>
    </div>
  )
}
