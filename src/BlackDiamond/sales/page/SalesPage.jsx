import { Layout } from "../../ui/layout/Layout"
import { MyShopping } from "../components/MyShopping"


export const SalesPage = () => {
  return (
    <Layout>
      <div className="w-11/12 mx-auto mt-8 flex flex-col md:mb-25 mb-8">
        <p className="font-titles font-semibold text-3xl md:text-3xl mb-6 text-center uppercase">Mis compras de boletos</p>
        <MyShopping />
      </div>
    </Layout>
  );
}
