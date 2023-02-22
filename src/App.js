import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthUser } from "./redux/auth-slice";
import Router from "./routes/Router";
import { getAccessToken } from "./utils/local-storage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Button from "./templates/Button";
// import CartPage from "./pages/CartPage";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (getAccessToken()) {
      dispatch(fetchAuthUser());
    }
  }, []);

  // console.log(getAccessToken());
  return (
    <>
      <Router />
      <ToastContainer autoClose="2000" theme="light" position="bottom-center" />
    </>
  );
}
