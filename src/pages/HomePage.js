import CategoryCarousel from "../components/CategoryCarousel";
import RecommendedCarousel from "../components/RecommendedCarousel";
import SpecialOffersCarousel from "../components/SpecialOffersCarousel";
import Waiting from "../components/Waiting";
import useGameInfo from "../hooks/useGameInfo";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageMainLayout from "../layouts/PageMainLayout";

export default function HomePage() {
  const gameInfo = useGameInfo();

  return (
    <>
      {gameInfo.length ? (
        <div>
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
            <div className="max-w-5xl">{/* <TrendingListGame /> */}</div>
          </PageMainLayout>
          <Footer />
        </div>
      ) : (
        <Waiting />
      )}
    </>
    // <>
    //   <Header />
    //   <PageMainLayout>
    //     <div className="max-w-5xl">
    //       <RecommendedCarousel title="FEATURED & RECOMMENDED" />
    //     </div>
    //     <div className="max-w-5xl">
    //       <SpecialOffersCarousel title="SPECIAL OFFERS" />
    //     </div>
    //     <div className="max-w-5xl">
    //       <CategoryCarousel title="BROWSE BY CATEGORY" />
    //     </div>
    //     <div className="max-w-5xl">{/* <TrendingListGame /> */}</div>
    //   </PageMainLayout>
    //   <Footer />
    // </>
  );
}
