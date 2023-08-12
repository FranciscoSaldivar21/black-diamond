import { HomeItem } from "../components/HomeItem";
// import { GaleryImages } from "../../galery/components/GaleryImages";
import { ActiveGiveaways } from "../../giveaways/components/ActiveGiveaways";
import { Layout } from "../../ui/layout/Layout";
// import { CarouselHome } from "../components/CarouselHome";
import { GaleryImages } from "../../galery/components/GaleryImages";

export const HomePage = () => {
  return (
    <Layout>
      <div className="w-full pt-4">
        <GaleryImages />
        <div className="w-11/12 mx-auto">
          {/* <CarouselHome /> */}
          <HomeItem />
          <ActiveGiveaways margin={false}/>
        </div>
      </div>
    </Layout>
  );
}

