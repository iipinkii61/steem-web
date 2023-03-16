import { useNavigate, useParams } from "react-router-dom";
import useSearchGame from "../hooks/useSearchGame";
import { useEffect, useState } from "react";
import { clearSearchGame, fetchGame, searchGame } from "../redux/game-slice";
import { useDispatch } from "react-redux";

export default function GameItem({ setSearchName }) {
  const findGame = useSearchGame();
  const navigate = useNavigate();
  const { steamAppId } = useParams();
  const dispatch = useDispatch();

  const onClick = (el) => {
    navigate("/app/" + el?.steamAppid + "/" + el?.name.replace(/[\W_]+/g, "_"));
    window.scrollTo({ top: 0 });
    dispatch(clearSearchGame());
  };
  useEffect(() => {
    dispatch(fetchGame(steamAppId));
    setSearchName((state) => "");
  }, [steamAppId]);

  return (
    <div className="flex flex-col w-[400px] justify-between mb-1 pr-4 backdrop-blur-md backdrop-brightness-110">
      {findGame?.slice(0,10).map((el) => (
        <div
          className="flex text-right"
          key={el?.id}
          onClick={() => onClick(el)}
        >
          <img
            src={el?.headerImage}
            className="h-11 bg-blue-400 m-4 cursor-pointer"
          />
          <div className="">
            <div className="cursor-pointer text-left">{el?.name}</div>
            <div className="text-left">{el?.priceOverview?.final_formatted}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
