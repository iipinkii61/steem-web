import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";
import TwoBox from "../components/category/TwoBox";
import ThreeBox from "../components/category/ThreeBox";
import FourBox from "../components/category/FourBox";
import SwiperCategory from "../components/category/SwiperCategory";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const gameInfo = useGameInfo();
  // // console.log(gameInfo);
  const navigate = useNavigate();
  const {genres} = useParams()
  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steamAppid + "/" + el?.name.replace(/[\W_]+/g, "_"),
    ); window.scrollTo({top:0});
  };

  const [showImage, setShowImage] = useState("");

  const filterGame = gameInfo?.filter(el=>el.genres?.find(item=>item?.description === genres))

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
          <SwiperCategory showImage={showImage} setShowImage={setShowImage}/>
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
