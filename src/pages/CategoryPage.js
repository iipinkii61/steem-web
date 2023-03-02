import React from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import TwoBox from "../components/category/TwoBox";
import ThreeBox from "../components/category/ThreeBox";
import FourBox from "../components/category/FourBox";
import GameCarousel from "../components/category/GameCarousel";


export default function CategoryPage() {
  return (
    <>
      <Header />
      <div className="min-h-[550px] flex justify-between pb-10">
        <div className="absolute bottom-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#1b2838] to-[#1b2838]" />
        <div className="absolute -z-20 h-[500px] w-full overflow-hidden">
          <img
            className="w-[1300px] mx-auto object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.600x338.jpg?t=1676412613"
            alt=""
          />
        </div>
        <div className="flex-1" />
        <div className="flex-[2_1_0%] z-50">
          <div className="text-5xl font-bold p-2 my-10">SURVIVAL</div>
          <div className="max-w-5xl">
            <Swiper
              spaceBetween={30}
              effect={"cards"}
              navigation={true}
              pagination={false}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <GameCarousel/>
              </SwiperSlide>
              <SwiperSlide>
                <GameCarousel/>
              </SwiperSlide>
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
