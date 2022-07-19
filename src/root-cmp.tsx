import { Routes, Route } from 'react-router-dom';

// routes
import routes from './routes';

// cmps
import { AppHeader } from './cmps/app-header'

export function RootCmp() {
  return (
    <div className="root-cmp">
      <AppHeader />
      <main>
        <Routes>
          {routes.map(route => (
            <Route key={route.path} element={<route.element />} path={route.path}/>
          ))}
        </Routes>
      </main>
    </div>
  );
}

