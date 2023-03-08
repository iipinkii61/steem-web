import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";
import IconWindows from "../assets/icons/IconWindows";
import IconMac from "../assets/icons/IconMac";
import GenresTag from "../components/GenresTag";

export default function TrendingListGame() {
  const gameInfo = useGameInfo();
  // console.log(gameInfo);
  const navigate = useNavigate();
  const [trendingGame, setTrendingGame] = useState();
  const [discountGame, setDiscountGame] = useState();
  const [tabGame, setTabGame] = useState(1);
  const handleClick = (el) => {
    navigate("/app/" + el?.steamAppid + "/" + el?.name.replace(/[\W_]+/g, "_"));
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (gameInfo.length > 0) {
      const temp = structuredClone(gameInfo);
      const aa = temp.sort(
        (a, b) => b?.recommendations?.total - a?.recommendations?.total ?? 0,
      );
      setTrendingGame(aa);
    }
  }, [gameInfo]);
  // console.log("trending", trendingGame);
  // console.log("discount", discountGame);

  useEffect(() => {
    if (gameInfo.length > 0)
      setDiscountGame(
        gameInfo
          .filter((el) => "priceOverview" in el)
          .filter((el) => el?.priceOverview?.discount_percent ?? 0 > 0),
      );
  }, [gameInfo]);

  return (
    <>
      <div className="tabs pt-5 pb-2">
 
        <div onClick={() => setTabGame(1)} className={`tab tab-bordered ${tabGame === 1 ? "tab-active" : ""}`}>
          NEW & TRENDING
        </div>
        
        <div onClick={() => setTabGame(2)} className={`tab tab-bordered ${tabGame === 2 ? "tab-active" : ""}`}>
          SPECIALS
        </div>
      </div>

      <div className="overflow-x-auto w-full rounded-sm cursor-pointer select-none">
        <table className="table w-full">
          <tbody>
            {/* <!-- row 1 --> */}
            {tabGame === 1 ? (
              trendingGame?.slice(1, 11).map((el) => (
                <tr
                  className="h-[80px] flex justify-between my-1"
                  key={el?.steamAppid}
                  onClick={() => handleClick(el)}
                >
                  <td className="bg-[#22394b] w-[250px] h-[80px] relative">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-top rounded-sm"
                      src={el?.headerImage}
                    />
                  </td>

                  <td className="bg-[#22394b] w-[350px] relative">
                    <span className="absolute top-1 left-3 text-sm">
                      {el?.name}
                    </span>
                    <span className="absolute top-7 left-3 text-gray-300 w-fit h-fit">
                      {el?.platforms.windows && <IconWindows />}
                    </span>
                    <span className="absolute top-7 left-9 text-gray-300 w-fit h-fit">
                      {el?.platforms.mac && <IconMac />}
                    </span>
                    <div className="w-full absolute bottom-1 left-3 flex gap-2 ">
                      {el?.categories?.slice(0, 2).map((tag) => (
                        <GenresTag key={tag.id} tag={tag.description} />
                      ))}
                    </div>
                  </td>

                  <td className="bg-[#22394b] w-[150px] h-[80px] text-center py-6 relative">
                    <span className="absolute text-lg left-4">
                      {!el?.isFree
                        ? el?.priceOverview?.final_formatted
                        : "Free to Play"}
                    </span>
                  </td>
                  <td className="bg-[#22394b] flex w-1/2 h-[80px] relative overflow-hidden rounded-sm">
                    <div className="flex">
                      <div className="h-[80px] absolute -left-2 top-0">
                        <img
                          className="w-full h-full object-cover"
                          src={el?.screenshots[2].path_full}
                        />
                      </div>
                      <div className="h-[80px] absolute left-[131px] top-0 border-x-2 border-[#22394b]">
                        <img
                          className="w-full h-full object-cover"
                          src={el?.screenshots[3].path_full}
                        />
                      </div>
                      <div className="h-[80px] absolute -right-2 top-0">
                        <img
                          className="w-full h-full object-cover"
                          src={el?.screenshots[4].path_full}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}

            {tabGame === 2 ? (
              discountGame?.slice(1, 11).map((el) => (
                <tr
                  className="h-[80px] flex justify-between my-1"
                  key={el?.steamAppid}
                  onClick={() => handleClick(el)}
                >
                  <td className="bg-[#22394b] w-[250px] h-[80px] relative">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-top rounded-sm"
                      src={el?.headerImage}
                    />
                  </td>

                  <td className="bg-[#22394b] w-[350px] relative">
                    <span className="absolute top-1 left-3 text-sm">
                      {el?.name}
                    </span>
                    <span className="absolute top-7 left-3 text-gray-300 w-fit h-fit">
                      {el?.platforms.windows && <IconWindows />}
                    </span>
                    <span className="absolute top-7 left-9 text-gray-300 w-fit h-fit">
                      {el?.platforms.mac && <IconMac />}
                    </span>
                    <div className="w-full absolute bottom-1 left-3 flex gap-2 ">
                      {el?.categories?.slice(0, 2).map((tag) => (
                        <GenresTag key={tag.id} tag={tag.description} />
                      ))}
                    </div>
                  </td>

                  <td className="bg-[#22394b] w-[150px] h-[80px] text-center py-6 relative">
                    <div className="absolute flex w-36 h-7 right-3 top-4">
                      <div className="w-[60px] px-2 font-bold text-lg text-[#98d21a] bg-[#4c6b22]">
                        -{el?.priceOverview?.discount_percent}%
                      </div>
                      <span className="absolute w-fit h-fit top-5 z-10 right-5 text-[10px] text-gray-400 price--line-through">
                        {el?.priceOverview?.initial_formatted}
                      </span>
                      <div className="absolute right-0 top-5 w-1/2 h-[35px] pr-2 pt-3 font-medium text-base text-right text-[#98d21a] bg-[#344654]">
                        {el?.priceOverview?.final_formatted}
                      </div>
                    </div>
                  </td>
                  <td className="bg-[#22394b] flex w-1/2 h-[80px] relative overflow-hidden rounded-sm">
                    <div className="flex">
                      <div className="h-[80px] absolute -left-2 top-0">
                        <img
                          className="w-full h-full object-cover"
                          src={el?.screenshots[2].path_full}
                        />
                      </div>
                      <div className="h-[80px] absolute left-[131px] top-0 border-x-2 border-[#22394b]">
                        <img
                          className="w-full h-full object-cover"
                          src={el?.screenshots[3].path_full}
                        />
                      </div>
                      <div className="h-[80px] absolute -right-2 top-0">
                        <img
                          className="w-full h-full object-cover"
                          src={el?.screenshots[4].path_full}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
