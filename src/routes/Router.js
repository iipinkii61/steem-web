import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Loginpage from '../pages/Loginpage';
import Registerpage from '../pages/Registerpage';
import CreateAccountPage from '../pages/CreateAccountPage';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Registerpage />,
  },
  {
    path: '/createaccount',
    element: <CreateAccountPage />,
  },
  {
    path: '/login',
    element: <Loginpage />,
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
