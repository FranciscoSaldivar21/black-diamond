import React from 'react'

export const TicketItem = ({ticketNumber} : props) => {
  return (
    <div className="flex flex-col mx-4 px-2 items-center cursor-pointer rounded-md hover:border-black hover:bg-gray-300">
        <img className="w-12 mb-1 pt-1" src="/src/assets/ficha-dorada.png" />
        <p className="hover:font-semibold">
            {ticketNumber}
        </p>
    </div>
  )
}
