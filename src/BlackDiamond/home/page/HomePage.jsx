import { HomeItem } from "../components/HomeItem";
import { GaleryImages } from "../../galery/components/GaleryImages";
import { ActiveGiveaways } from "../../giveaways/components/ActiveGiveaways";
import { Layout } from "../../ui/layout/Layout";
import { CarouselHome } from "../components/CarouselHome";

export const HomePage = () => {
  return (
    <div className="bg-background w-full">
      <Layout>
        <div className="w-11/12 mx-auto">
          <h1 className="font-titles uppercase my-4 text-6xl">
            Black Diamond
          </h1>
        </div>
        <CarouselHome />
        <HomeItem />
        <GaleryImages />
        <ActiveGiveaways />
      </Layout>
    </div>
  );
}

