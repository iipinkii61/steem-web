import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUserProfile } from "./redux/user-slice";
import { fetchCart } from "./redux/cart-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useAuth from "./hooks/useAuth";
import { fetchGameInfo } from "./redux/game-slice";
import useGameInfo from "./hooks/useGameInfo";
import Loading from "./components/Loading";
import useLoading from "./hooks/useLoading";

export default function App() {
  const dispatch = useDispatch();
  const authUser = useAuth();
  const gameInfo = useGameInfo();
  const load = useLoading();

  // fetch cart and userProfile
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!gameInfo?.length) {
        console.log("fetching");
        dispatch(fetchGameInfo());
      }
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [gameInfo]);

  // console.log(gameInfo);

  useEffect(() => {
    if (authUser) {
      dispatch(fetchUserProfile(authUser.id));
      dispatch(fetchCart());
    }
  }, [authUser]);

  return (
    <>
      {load && <Loading />}
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="bottom-center" />
    </>
  );
}
