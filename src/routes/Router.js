import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import ChatPage from "../pages/ChatPage";
import PaymentInfoPage from "../pages/PaymentInfoPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import ProfilePage from "../pages/ProfilePage";
import WishlistPage from "../pages/WishlistPage";
import VisaPage from "../pages/VisaPage";
import Friendpage from "../pages/Friendpage";
import AddFriend from "../pages/AddFriend";
import GamesPage from "../pages/GamesPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/createaccount",
    element: <CreateAccountPage />,
  },
  {
    path: "/paymentinfo",
    element: <PaymentInfoPage />,
  },
  {
    path: "/visapayment",
    element: <VisaPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/friends",
    element: <Friendpage />,
  },
  {
    path: "/addfriends",
    element: <AddFriend />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/profiles",
    element: <ProfilePage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
  {
    path: "/app/:steamAppId",
    element: <GamesPage />,
  },
  {
    path: "/app/:steamAppId/:gameName",
    element: <GamesPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
