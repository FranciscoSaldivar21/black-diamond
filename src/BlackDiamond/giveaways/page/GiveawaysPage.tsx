import { Layout } from "../../ui/layout/Layout"
import { ActiveGiveaways } from "../components/ActiveGiveaways"
import { InactiveGiveaways } from "../components/InactiveGiveaways"


export const GiveawaysPage = () => {
  return (
    <Layout>
      <div className="w-11/12 mx-auto">
        <ActiveGiveaways />
        <InactiveGiveaways />
      </div>
    </Layout>
    )
}
 