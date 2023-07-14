import { Layout } from "../../layout/Layout"
import { GaleryImages } from "../components/GaleryImages"

export const GaleryPage = () => {
  return (
    <Layout>
      <p className="font-titles text-3xl mb-8">Algunos de nuestros sorteos</p>
      <GaleryImages />
    </Layout>
  )
}

