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
import FriendPage from "../pages/Friendpage";
import AddFriend from "../pages/AddFriend";
import FriendLayout from "../layouts/FriendLayout";
import GamesPage from "../pages/GamesPage";
import PendingFriends from "../pages/PendingFriends";
import GeneralProfilePage from "../pages/GeneralProfilePage";
import AvatarProfilePage from "../pages/AvatarProfilePage";
import ProfileBgPage from "../pages/ProfileBgPage";

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
    element: <FriendLayout />,
    children: [
      {
        path: "",
        element: <FriendPage />,
      },
      {
        path: "add",
        element: <AddFriend />,
      },
      {
        path: "pending",
        element: <PendingFriends />,
      },
    ],
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
    path: "/generalprofile",
    element: <GeneralProfilePage />,
  },
  {
    path: "/Avataprofile",
    element: <AvatarProfilePage />,
  },
  {
    path: "/Backgroundprofile",
    element: <ProfileBgPage />,
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
  {
    path: "/checkout",
    element: <HomePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
