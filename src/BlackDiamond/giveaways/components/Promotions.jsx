import { PromotionCard } from "../moleculs/PromotionCard";


export const Promotions = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 mb-4">
        <PromotionCard buyTickets={1} giftTickets={0} image={'ficha-1.png'} total={275}/>
        <PromotionCard buyTickets={3} giftTickets={7} image={'ficha-3.png'} total={3*275}/>
        <PromotionCard buyTickets={5} giftTickets={15} image={'ficha-5.png'} total={5*275}/>
        <PromotionCard buyTickets={8} giftTickets={22} image={'ficha-8.png'} total={8*275}/>
        <PromotionCard buyTickets={10} giftTickets={30} image={'ficha-10.png'} total={10*275}/>
    </div>
  );
}
