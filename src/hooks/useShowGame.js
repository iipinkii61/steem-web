import { useSelector } from "react-redux";

export default () => {
  const showGame = useSelector((state) => state.game.showGame);
  return showGame;
};
