import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import useGameInfo from "../../hooks/useGameInfo";
import GameCarousel from "../../components/category/GameCarousel";
import ArrowL from "../../assets/icons/ArrowL";
import ArrowR from "../../assets/icons/ArrowR";
import { useParams } from "react-router-dom";

export default function SwiperCategory(props) {
  const { showImage, setShowImage } = props;
  const gameInfo = useGameInfo();
  // console.log(gameInfo);
  const navigate = useNavigate();
  const { genres } = useParams();
  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steamAppid + "/" + el?.name.replace(/[\W_]+/g, "_"),
    ); window.scrollTo({top:0});
  };

  //   const [showImage, setShowImage] = useState("");
  const [mySwiper, setMySwiper] = useState(0);

  const filterGame = gameInfo?.filter((el) =>
    el?.genres?.find((item) => item.description === genres),
  );

  useEffect(() => {
    if (filterGame.length > 0) {
      const idx = mySwiper.realIndex || 0;
      setShowImage(filterGame[idx].screenshots[0]?.path_full);
    }
  }, [filterGame]);
  return (
    <div className="max-w-5xl relative cursor-pointer select-none">
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
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {filterGame?.map((el) => (
          <SwiperSlide key={el?.steamAppid}>
            <GameCarousel
              el={el}
              handleClick={handleClick}
              setShowImage={setShowImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
