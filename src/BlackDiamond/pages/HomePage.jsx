import { CarItem } from "../components/CarItem"
import { Layout } from "../layout/Layout"


export const HomePage = () => {
  return (
    <div className="bg-slate-100">
      <Layout>
        <CarItem car={{title: "Lobo Shelby", description: "Lobo año 2022"}} />
        <p>Desde home page</p>
      </Layout>
    </div>
  )
}

