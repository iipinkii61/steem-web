import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import ChatPage from "../pages/ChatPage";
import PaymentPage from "../pages/PaymentPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import ProfilePage from "../pages/ProfilePage";
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
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/friends",
    element: <HomePage />,
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
    element: <HomePage />,
  },
  {
    path: "/app",
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
