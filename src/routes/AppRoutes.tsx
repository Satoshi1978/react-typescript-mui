import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import About from '../features/about/About';
import Employeelist from '../features/employeelist/Employeelist';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const protectedRoutes = [
  {
    path: '',
    element: <App />,
    children: [
      { path: '/about', element: <About /> },
      { path: '/home', element: <Employeelist /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];

export const AppRoutes = () => {
  const routes = protectedRoutes;
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
