import { Layout } from "../../ui/layout/Layout"
import { MyShopping } from "../components/MyShopping"


export const SalesPage = () => {
  return (
    <Layout>
        <div className="w-11/12 mx-auto">
            <p className="text-3xl">Mis compras de boletos</p>
            <MyShopping />
        </div>
    </Layout>
  )
}
