import { useSelector } from "react-redux";

export default function useGameInfo() {
  const game = useSelector((state) => state.game.gameInfo);
  return game;
}
