import { NavBar } from "../../ui/components";
import { Layout } from "../../ui/layout/Layout";
import { ActiveGiveaways } from "../components/ActiveGiveaways";
import { BonusByTicket } from "../components/BonusByTicket";
import { PriceTable } from "../components/PriceTable";


export const GiveawaysPage = () => {
  return (
    <Layout>
      <NavBar title={"SORTEOS"} image={"bg-navBarGiveaway"} />
      <ActiveGiveaways />
      <PriceTable />
      <BonusByTicket />
    </Layout>
  )
}
