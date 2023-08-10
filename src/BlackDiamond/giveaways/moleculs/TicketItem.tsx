export const TicketItem = ({ticket, status, onClick} : props) => {
  return (
    <div>
      {status ? (
        <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
          <img className="w-12 mb-1 pt-1" src="/src/assets/ficha-dorada.png" />
          <p className="hover:font-semibold">
            {ticket}
          </p>
        </div>
      ) : (
        <div onClick={onClick} className="flex flex-col items-center justify-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
          <img className="w-12 mb-1 pt-1" src="/src/assets/ficha-gris.png" />
          <p className="hover:font-semibold line-through">
            {ticket}
          </p>
        </div>
      )}
    </div>
  );
}
