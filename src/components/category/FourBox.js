import React from "react";
import IconWindows from "../../assets/icons/IconWindows";
import IconMac from "../../assets/icons/IconMac";

import { useNavigate } from "react-router-dom";
import useGameInfo from "../../hooks/useGameInfo";
import { useParams } from "react-router-dom";

export default function FourBox() {
  const gameInfo = useGameInfo();
  const navigate = useNavigate();
  const { genres } = useParams();
  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steam_appid + "/" + el?.name?.replace(/[\W_]+/g, "_"),
    ); window.scrollTo({top:0});
  };

  const filterGame = gameInfo.filter((el) =>
    el.genres.find((item) => item.description === genres),
  );

  function getRandomElements(arr,length) {
    const randomArr = [];
    
    while (randomArr.length < length) {
      const randomNumber = Math.floor(Math.random() * (length));
      
      if (!randomArr.includes(randomNumber)) {
        randomArr.push(randomNumber);
      }
    }
    return randomArr.map(el=>arr[el])
  }
  const randomFilterGame = getRandomElements(filterGame, 20);
  return (
    <div className="flex justify-between cursor-pointer select-none">
      {randomFilterGame?.slice(0, 4).map((el,idx) => {
        return (
          <div
            className="w-[240px] h-[140px] relative"
            key={idx}
            onClick={() => handleClick(el)}
          >
            <img
              className="w-full h-[120px] object-cover"
              src={el?.header_image}
              alt=""
            />
            <div className="absolute bottom-0 w-full h-10 bg-black">
              <span className="absolute left-1 top-2 text-gray-300 w-fit h-fit">
                {el?.platforms?.windows && <IconWindows />}
              </span>
              <span className="absolute left-7 top-2 text-gray-300 w-fit h-fit">
                {el?.platforms?.mac && <IconMac />}
              </span>
              <span className="absolute right-2 top-2 text-gray-200 w-fit h-fit">
                {!el?.is_free
                  ? el?.price_overview?.final_formatted
                  : "Free to Play"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
