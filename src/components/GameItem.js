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
    <div className="flex flex-col justify-between items-center bg-[#18202C] mb-1 pr-4">
      {findGame?.map((el) => (
        <div
          className="flex items-center"
          key={el?.id}
          onClick={() => onClick(el)}
        >
          <img
            src={el?.headerImage}
            className="h-11 bg-blue-400 m-4 cursor-pointer"
          />
          <div>
            <div className="cursor-pointer">{el?.name}</div>
            <div>{el?.priceOverview?.final_formatted}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
