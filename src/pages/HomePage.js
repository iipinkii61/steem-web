import RecommendedCarousel from "../components/RecommendedCarousel";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageMainLayout from "../layouts/PageMainLayout";
export default function HomePage() {
  return (
    <>
      <Header />
      <PageMainLayout title01="FEATURED & RECOMMENDED">
        <RecommendedCarousel />
      </PageMainLayout>
      <Footer />
    </>
  );
}
