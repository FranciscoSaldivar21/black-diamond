import { NavBar } from "../../ui/components";
import { Layout } from "../../ui/layout/Layout";
import { Information } from "../components/Information";
import { Dinamics } from "../moleculs/Dinamics";
import { WhyBuy } from "../moleculs/WhyBuy";

export const AboutPage = () => {
  return (
    <Layout>
      <NavBar />
      <div className="w-11/12 mx-auto mt-8">
        <Information />
        <WhyBuy />
        <Dinamics />
      </div>
    </Layout>
  );
}
