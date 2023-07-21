import { Layout } from "../../ui/layout/Layout"
import { GaleryImages } from "../components/GaleryImages"

export const GaleryPage = () => {
  return (
    <Layout>
      <div className="mx-20">
        <p className="font-titles text-3xl mb-8">Algunos de nuestros sorteos</p>
        <GaleryImages />
      </div>
    </Layout>
  )
}

