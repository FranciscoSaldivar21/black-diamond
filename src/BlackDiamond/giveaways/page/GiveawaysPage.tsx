import { Layout } from "../../ui/layout/Layout"
import { ActiveGiveaways } from "../components/ActiveGiveaways"
import { InactiveGiveaways } from "../components/InactiveGiveaways"


export const GiveawaysPage = () => {
  return (
    <Layout>
      <ActiveGiveaways />
      <InactiveGiveaways />
    </Layout>
    )
}
 