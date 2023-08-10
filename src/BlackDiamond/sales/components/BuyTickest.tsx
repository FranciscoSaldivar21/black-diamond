import { TicketItem } from "../moleculs/TicketItem"


export const BuyTickest = ({ data, benefic }: props) => {
  const color = parseInt(benefic);
  const giftGiveaways = data.filter(ticket => ticket.status === 2);
  const boughtGiveaways = data.filter(ticket => ticket.status === 1);
  return (
    <div className="mb-8">
      <div className="mt-10">
        <p className="text-xl font-semibold uppercase font-subTitles md:text-3xl mb-2">Boletos comprados <span>({boughtGiveaways.length})</span></p>
        <div className="mt-4 grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 2xl:grid-cols-12">
          {
            boughtGiveaways.map(ticket => <TicketItem key={ticket.ticket_number} ticketNumber={ticket.ticket_number} color={color} />)
          }
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold uppercase font-subTitles md:text-3xl mb-2">Boletos de regalo <span>({giftGiveaways.length})</span></p>
        <div className="mt-4 grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 2xl:grid-cols-12">
          {
            giftGiveaways.map(ticket => <TicketItem key={ticket.ticket_number} ticketNumber={ticket.ticket_number} color={color} />)
          }
        </div>
      </div>

    </div>
  )
}

