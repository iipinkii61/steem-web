import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CartPage from '../pages/CartPage';

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
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <HomePage />,
  },
  {
    path: '/register',
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
