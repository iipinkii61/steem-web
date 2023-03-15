// searchGame
import { useSelector } from "react-redux";

export default function useSearchGame() {
  return useSelector((state) => state.game.searchGame);
}
