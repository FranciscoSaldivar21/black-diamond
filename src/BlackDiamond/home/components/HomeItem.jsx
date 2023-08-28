

export const HomeItem = () => {
  return (
    <div className="my-6 lg:my-12 w-full bg-center bg-blogSmall md:bg-blog bg-no-repeat bg-cover lg:bg-cover h-[500px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col justify-center items-start pl-12 lg:pl-36">
        <p className="text-white uppercase text-3xl font-bold">Revive </p>
        <p className="text-white uppercase text-3xl font-bold">el triunfo</p>
        <div className="h-[1px] w-full my-4 bg-lightGold"></div>
        <p className="text-white text-xl">Así se vivió el evento de</p>
        <p className="text-white text-xl">septiembre donde la gran SHELBY</p>
        <p className="text-white text-xl">obtuvo a su nuevo dueño.</p>
        <button className="uppercase py-1 px-3 rounded-full bg-lightGold font-bold mt-6">LEER BLOG</button>
      </div>
    </div>
  );
}
