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
import PageLayout from "../layouts/PageLayout.js";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/createAccount", element: <CreateAccountPage /> },
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/app/:steamAppId",
        element: <GamesPage />,
      },
      {
        path: "/app/:steamAppId/:gameName",
        element: <GamesPage />,
      },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <PageLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/chat", element: <ChatPage /> },
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
        path: "/paymentinfo",
        element: <PaymentInfoPage />,
      },
      {
        path: "/visapayment",
        element: <VisaPage />,
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
        path: "/avatarprofile/:userId",
        element: <AvatarProfilePage />,
      },
      {
        path: "/backgroundprofile",
        element: <ProfileBgPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
