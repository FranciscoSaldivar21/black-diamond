import { HomeItem } from "../components/HomeItem";
import { ActiveGiveaways } from "../../giveaways/components/ActiveGiveaways";
import { Layout } from "../../ui/layout/Layout";
import { GaleryImages } from "../../galery/components/GaleryImages";
import { AboutUsItem } from "./AboutUsItem";
import { NavBar } from "../../ui/components";

export const HomePage = () => {
  return (
    <Layout>
      <div className="w-full">
        <NavBar/>
        <AboutUsItem />
        <ActiveGiveaways margin={false}/>
        <HomeItem />
        <GaleryImages />
      </div>
    </Layout>
  );
}

