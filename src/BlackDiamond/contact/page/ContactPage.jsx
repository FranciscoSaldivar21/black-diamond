import { NavBar } from "../../ui/components";
import { Layout } from "../../ui/layout/Layout"
import { Form } from "../components"


export const ContactPage = () => {
  return (
    <Layout>
      <NavBar title={"CONTACTO"} image={"bg-navBarContact"} />
      <Form />
    </Layout> 
  );
}
