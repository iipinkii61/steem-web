import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthUser } from "./redux/auth-slice";
import Router from "./routes/Router";
import { getAccessToken } from "./utils/local-storage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchGameInfo } from "./redux/game-slice";

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (getAccessToken()) {
  //     dispatch(fetchAuthUser());
  //   }
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchGameInfo());
  // }, []);

  return (
    <>
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="bottom-center" />
    </>
  );
}
