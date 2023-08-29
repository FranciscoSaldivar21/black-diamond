import table from "../../../assets/prices-table.png"

export const PriceTable = () => {
  return (
    <div className="flex flex-col items-center bg-zinc-800 mt-5">
        <p className="uppercase text-black font-bold text-lg md:text-2xl xl:text-4xl mt-10 py-2 px-10 lg:py-4 lg:px-20 bg-lightGold rounded-2xl">precio p/boleto+plus</p>
        <img src={table} className="w-full px-1 lg:px-10 py-4"/>
    </div>
  )
}
