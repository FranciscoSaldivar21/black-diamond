import { Layout } from "../../ui/layout/Layout"
import { MyShopping } from "../components/MyShopping"


export const SalesPage = () => {
  return (
    <Layout>
      <div className="w-11/12 mx-auto mt-8 flex flex-col md:mb-20 mb-8">
        <p className="font-titles uppercase text-2xl">Mis compras de boletos</p>
        <MyShopping />
      </div>
    </Layout>
  );
}
