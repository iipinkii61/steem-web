import CategoryCarousel from "../components/CategoryCarousel";
import RecommendedCarousel from "../components/RecommendedCarousel";
import SpecialOffersCarousel from "../components/SpecialOffersCarousel";
import TrendingListGame from "../components/TrendingListGame";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageMainLayout from "../layouts/PageMainLayout";
export default function HomePage() {
  return (
    <>
      <Header />
      <PageMainLayout>
        <RecommendedCarousel title="FEATURED & RECOMMENDED"/>
        <SpecialOffersCarousel title="SPECIAL OFFERS"/>
        <CategoryCarousel title="BROWSE BY CATEGORY"/>
        <TrendingListGame/>
      </PageMainLayout>
      <Footer />
    </>
  );
}
