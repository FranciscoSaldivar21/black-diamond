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
        <div className="bg-navBarHome bg-cover h-96 lg:h-[860px]">
          <NavBar/>
          <div className="absolute left-2 top-8 lg:top-80 md:left-12 pl-4 border-l-2 border-lightGold">
            <p className="text-white uppercase text-xs lg:text-5xl font-bold">la mejor opción</p>
            <p className="text-white uppercase text-xs lg:text-5xl font-bold">para tener el auto</p>
            <p className="text-white uppercase text-xs lg:text-5xl font-bold">de tus sueños</p>
          </div>
        </div>
        <AboutUsItem />
        <ActiveGiveaways margin={false}/>
        <HomeItem />
        <GaleryImages />
      </div>
    </Layout>
  );
}

