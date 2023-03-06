import React from "react";
import IconMac from "../../assets/icons/IconMac";
import IconWindows from "../../assets/icons/IconWindows";

import { useNavigate } from "react-router-dom";
import useGameInfo from "../../hooks/useGameInfo";
import { useParams } from "react-router-dom";


export default function TwoBox() {

  const gameInfo = useGameInfo();
  // console.log(gameInfo);
  const navigate = useNavigate();
  const {genres} = useParams()
  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steam_appid + "/" + el?.name?.replace(/[\W_]+/g, "_"),
    );
  };

  const filterGame = gameInfo.filter(el=>el.genres.find(item=>item.description === genres))
  console.log(filterGame);

  return (
    <>
      <div className="flex justify-between">
        <div className="w-[480px] h-[260px] relative" onClick={()=>handleClick(filterGame?.[0])}>
          <img
            className="w-full h-full object-cover"
            src={filterGame?.[0]?.header_image} alt=""
          />
          <div className="absolute bottom-0 w-full h-10 bg-black">
            <span className="absolute left-1 top-2 text-gray-300 w-fit h-fit">
            {filterGame?.[0].platforms?.windows && <IconWindows />}
            </span>
            <span className="absolute left-7 top-2 text-gray-300 w-fit h-fit">
            {filterGame?.[0].platforms?.mac && <IconMac />}
            </span>
            <span className="absolute right-2 top-2 text-gray-200 w-fit h-fit">
            {!filterGame?.[0].is_free
                  ? filterGame?.[0].price_overview?.final_formatted
                  : "Free to Play"}
            </span>
          </div>
        </div>
        <div className="w-[480px] h-[260px] relative" onClick={()=>handleClick(filterGame?.[1])}>
          <img
            className="w-full h-full object-top"
            src={filterGame?.[1]?.header_image} alt=""
          />
          <div className="absolute bottom-0 w-full h-10 bg-black">
            <span className="absolute left-1 top-2 text-gray-300 w-fit h-fit">
            {filterGame?.[1].platforms?.windows && <IconWindows />}
            </span>
            <span className="absolute left-7 top-2 text-gray-300 w-fit h-fit">
            {filterGame?.[1].platforms?.mac && <IconMac />}
            </span>
            <span className="absolute right-2 top-2 text-gray-200 w-fit h-fit">
            {!filterGame?.[1].is_free
                  ? filterGame?.[1].price_overview?.final_formatted
                  : "Free to Play"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
