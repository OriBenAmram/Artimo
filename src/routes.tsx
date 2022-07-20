import { Route } from './models/interfaces';
import { HomePage } from './pages/home-page';
import { LoginPage } from './pages/login-page';

const routes : Route[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
];

export default routes;
