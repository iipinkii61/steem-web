import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CartPage from '../pages/CartPage';
import CreateAccountPage from '../pages/CreateAccountPage';
import PaymentPage from '../pages/PaymentPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/createaccount',
    element: <CreateAccountPage />,
  },
  {
    path: '/payment',
    element: <PaymentPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: '/friends',
    element: <HomePage />,
  },
  {
    path: '/chat',
    element: <HomePage />,
  },
  {
    path: '/profiles',
    element: <HomePage />,
  },
  {
    path: '/wishlist',
    element: <HomePage />,
  },
  {
    path: '/cart',
    element: <HomePage />,
  },
  {
    path: '/checkout',
    element: <HomePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
