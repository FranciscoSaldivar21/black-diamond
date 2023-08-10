import { HomeItem } from "../../home/components/HomeItem";
import { Layout } from "../../ui/layout/Layout";
import { PayMethods } from "../components/PayMethods";

export const AboutPage = () => {
  return (
    <Layout>
      <div className="w-11/12 mx-auto mt-8">
        <HomeItem />
        <PayMethods />
      </div>
    </Layout>
  );
}
