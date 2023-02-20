import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loginpage from '../pages/Loginpage';
import Registerpage from '../pages/Registerpage';

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Registerpage />,
  },
  {
    path: '/login',
    element: <Loginpage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
