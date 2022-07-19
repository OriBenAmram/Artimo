import { HomePage } from './pages/home-page';
import { LoginPage } from './pages/login-page';

type route = { 
    path: string
    element: any
}

const routes : route[] = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/login',
    element: LoginPage,
  }
];

export default routes;
