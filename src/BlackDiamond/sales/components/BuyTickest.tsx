import { TicketItem } from "../moleculs/TicketItem"


export const BuyTickest = ({data} : props) => {
  return (
    <div className="mt-4 flex">
        {
            data.map((element) => <TicketItem key={element.ticket_number} ticketNumber={element.ticket_number}/>)
        }
    </div>
  )
}
