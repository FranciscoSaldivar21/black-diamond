import { CarouselHome } from "../../components/CarouselHome";
import { HomeItem } from "../components/HomeItem"
import { Layout } from "../../layout/Layout"
import { ActiveGiveaways } from "../../components/ActiveGiveaways";
import { GaleryImages } from "../../galery/components/GaleryImages";

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

