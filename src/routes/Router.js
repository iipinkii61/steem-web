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
import FriendPage from "../pages/FriendPage";
import AddFriend from "../pages/AddFriend";
import FriendLayout from "../layouts/FriendLayout";

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
    ],
  },
  // {
  //   path: "/addfriends",
  //   element: <AddFriend />,
  // },
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
