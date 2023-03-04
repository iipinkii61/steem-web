import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";
import ArrowL from "../assets/icons/ArrowL";
import ArrowR from "../assets/icons/ArrowR";

export default function SpecialOffersCarousel(props) {
  const { title } = props;
  const gameInfo = useGameInfo();
  const navigate = useNavigate();
  const [discountGame, setDiscountGame] = useState();
  const [mySwiper, setMySwiper] = useState(0);

  useEffect(() => {
    if (gameInfo.length > 0)
      setDiscountGame(
        gameInfo
          .filter((el) => "price_overview" in el)
          .filter((el) => el.price_overview.discount_percent > 0),
      );
  }, [gameInfo]);

  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steam_appid + "/" + el?.name.replace(/[\W_]+/g, "_"),
    );
  };
  return (
    <>
      <div className="pt-5 pb-5">{title}</div>
      <div className="max-w-5xl relative">
        <div
          onClick={() => {
            mySwiper.slideNext();
          }}
          className="absolute z-10 w-14 h-52 -right-16 top-24 rounded-md backdrop-blur-md backdrop-brightness-75"
        >
          <div className="absolute top-20 right-2">
            <ArrowR />
          </div>
        </div>
        <div
          onClick={() => {
            mySwiper.slidePrev();
          }}
          className="absolute z-10 w-14 h-52 -left-16 top-24 rounded-md backdrop-blur-md backdrop-brightness-75"
        >
          <div className="absolute top-20 left-2">
            <ArrowL />
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => setMySwiper(swiper)}
        slidesPerView={3}
        slidesPerGroup={3}
        grabCursor={true}
        // loop={true}
        spaceBetween={0}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, navigate, Pagination]}
        className="mySwiper"
      >
        {discountGame?.map((el) => (
            <SwiperSlide key={el.steam_appid}>
              <div
                onClick={() => handleClick(el)}
                className="w-[306px] h-[350px] mx-4 flex justify-evenly"
              >
                <div className="w-[306px] h-[350px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    value={el?.screenshots[0]}
                    key={el?.screenshots[0]}
                    src={el?.screenshots[0].path_full}
                  />
                </div>
                <div className=" absolute w-[306px] h-[113px] bottom-0 bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
                  <div className="text-left pl-2 pt-2 text-base font-medium">
                    {el?.name}
                  </div>
                  <div className="text-left text-xs pl-2 font-thin relative">
                    {el?.release_date?.date}
                    <div className="absolute h-[34px] w-[76px] top-10 left-[144px] px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                      -{el?.price_overview?.discount_percent}%
                    </div>
                    <div className="absolute h-[34px] w-[76px] top-10 left-[220px] pr-2 pt-2 font-extralight text-base text-right text-[#98d21a] bg-[#344654]">
                      {el?.price_overview?.final_formatted}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
