import { CarouselHome } from "../../components/CarouselHome";
import { HomeItem } from "../components/HomeItem"
import { Layout } from "../../layout/Layout"
import { ActiveGiveaways } from "../../components/ActiveGiveaways";


export const HomePage = () => {
  return (
    <div className="bg-background">
      <Layout>
        <h1 className="font-titles uppercase my-4 text-6xl">Black Diamond</h1>
        <img className="mb-12" src="https://bangkokpartyrentals.com/wp-content/uploads/2021/06/08G1Lb-1.jpg" />
        <HomeItem />
        <CarouselHome />
        <ActiveGiveaways />
      </Layout>
    </div>
  );
}

