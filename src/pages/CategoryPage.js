import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay,Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";
import TwoBox from "../components/category/TwoBox";
import ThreeBox from "../components/category/ThreeBox";
import FourBox from "../components/category/FourBox";
import GameCarousel from "../components/category/GameCarousel";
import ArrowL from "../assets/icons/ArrowL";
import ArrowR from "../assets/icons/ArrowR";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const gameInfo = useGameInfo();
  // console.log(gameInfo);
  const navigate = useNavigate();
  const {genres} = useParams()
  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steam_appid + "/" + el?.name.replace(/[\W_]+/g, "_"),
    );
  };

  const [showImage, setShowImage] = useState("");
  const [mySwiper, setMySwiper] = useState(0);

  const filterGame = gameInfo?.filter(el=>el.genres.find(item=>item.description === genres))

  useEffect(() => {
    if (gameInfo.length > 0) {
      const idx = mySwiper.realIndex || 0;
      setShowImage(filterGame[idx].screenshots[0]?.path_full);
    }
  }, [gameInfo]);

  return (
    <>
      <Header />
      <div className="min-h-[550px] flex justify-between pb-10">
        <div className="absolute bottom-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#1b2838] to-[#1b2838]" />
        <div className="absolute -z-20 h-[500px] w-full overflow-hidden">
          <img
            className="w-[1300px] mx-auto object-cover"
            src={showImage}
            alt=""
          />
        </div>
        <div className="flex-1" />
        <div className="flex-[2_1_0%] z-50">
          <div className="text-5xl font-bold p-2 my-10">{filterGame?.[0]?.genres?.[0].description}</div>
          <div className="max-w-5xl relative">
            <div
              onClick={() => {
                mySwiper.slideNext();
              }}
              className="absolute z-10 w-14 h-52 -right-2 top-16 rounded-md backdrop-blur-md backdrop-brightness-75"
            >
              <div className="absolute top-20 right-2">
                <ArrowR />
              </div>
            </div>
            <div
              onClick={() => {
                mySwiper.slidePrev();
              }}
              className="absolute z-10 w-14 h-52 -left-2 top-16 rounded-md backdrop-blur-md backdrop-brightness-75"
            >
              <div className="absolute top-20 left-2">
                <ArrowL />
              </div>
            </div>
            <Swiper
              onSwiper={(swiper) => setMySwiper(swiper)}
              onSlideChange={() => {
                setShowImage(
                  filterGame[mySwiper?.realIndex].screenshots[0]?.path_full,
                );
              }}
              spaceBetween={30}
              grabCursor={true}
              effect={"slide"}
              navigation={false}
              pagination={false}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              modules={[Autoplay,Navigation, Pagination]}
              className="mySwiper"
            >
              {filterGame?.map((el) => (
                <SwiperSlide key={el?.steam_appid}>
                  <GameCarousel
                    el={el}
                    handleClick={handleClick}
                    setShowImage={setShowImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* popular titles*/}

          <div className="p-3">
            <div className="text-lg my-2 w-fit">POPULAR TITLES</div>
            <TwoBox />
            <br />
            <ThreeBox />
            <br />
            <FourBox />
            <br />
            <ThreeBox />
            <br />
            <TwoBox />
          </div>
          {/* end popular titles */}
        </div>
        <div className="flex-1" />
      </div>
      <Footer />
    </>
  );
}
