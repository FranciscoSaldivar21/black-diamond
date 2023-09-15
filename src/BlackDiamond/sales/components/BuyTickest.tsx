import { TicketItem } from "../moleculs/TicketItem"


export const BuyTickest = ({ data, benefic }: props) => {
  const color = parseInt(benefic);
  const giftTickets = data.filter(ticket => ticket.status === 2);
  const boughtTickets = data.filter(ticket => ticket.status === 1);
  return (
    <div>
      {
        boughtTickets.length >= 10 ? <p className="text-darkGold">Tienes beneficio SUPER TRIPLE BLACK DIAMOND por comprar más de 10 boletos.</p>
          : ""
      }
      <div className="mt-6">
        <p className="text-xl font-semibold uppercase font-subTitles md:text-3xl mb-2">Fichas compradas <span>({boughtTickets.length})</span></p>
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 2xl:grid-cols-8 gap-2 md:gap-3">
          {
            boughtTickets.map(ticket => <TicketItem key={ticket.ticket_number} ticketNumber={ticket.ticket_number} color={color} />)
          }
        </div>
      </div>
      {
        giftTickets.length > 0 ?
          <div className="mt-6">
            <p className="text-xl font-semibold uppercase font-subTitles md:text-3xl mb-2">Fichas de regalo <span>({giftTickets.length})</span></p>
						<div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 2xl:grid-cols-8 gap-2 md:gap-3">
              {
                giftTickets.map(ticket => <TicketItem key={ticket.ticket_number} ticketNumber={ticket.ticket_number} color={color} />)
              }
            </div>
          </div>
        :
          ""
      }

    </div>
  )
}

