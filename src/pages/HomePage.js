import { useSelector } from "react-redux";
import CategoryCarousel from "../components/CategoryCarousel";
import RecommendedCarousel from "../components/RecommendedCarousel";
import SpecialOffersCarousel from "../components/SpecialOffersCarousel";
import TrendingListGame from "../components/TrendingListGame";
import useGameInfo from "../hooks/useGameInfo";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageMainLayout from "../layouts/PageMainLayout";
export default function HomePage() {
  // const gameInfo = useSelector((state) => state.game.gameInfo);
  // console.log(gameInfo);
  // console.log(gameInfo[0]?.about_the_game);
  // const gameInfo = useGameInfo();
  // console.log(gameInfo);
  return (
    <>
      <Header />

      <PageMainLayout>
        <div className="max-w-5xl">
          <RecommendedCarousel title="FEATURED & RECOMMENDED" />
        </div>
        <div className="max-w-5xl">
          <SpecialOffersCarousel title="SPECIAL OFFERS" />
        </div>
        <div className="max-w-5xl">
          <CategoryCarousel title="BROWSE BY CATEGORY" />
        </div>
        <div className="max-w-5xl">
          {/* <TrendingListGame /> */}
        </div>
      </PageMainLayout>

      <Footer />
    </>
  );
}
