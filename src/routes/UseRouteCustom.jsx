import { useRoutes } from 'react-router-dom';
import { path } from '../common/path';
import Login from '../pages/LoginAndRegister/Login';
import Register from '../pages/LoginAndRegister/Register';
import NotFound from '../pages/NotFound/NotFound';
import AdminTemplate from '../templates/AdminTemplates/AdminTemplate';
import FilmsManager from '../pages/Films/FilmsManager/FilmsManager';
import CreateFilms from '../pages/Films/CreateFilms/CreateFilms';
import HomeTemplate from '../templates/homTemplate/HomeTemplate';
import HomePage from '../pages/homePage/HomePage';
const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.trangChu,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: path.dangNhap,
      element: <Login />, 
      
    },
    {
      path: path.dangKy,
      element: <Register />,
    },
    {
      path: path.admin.films,
      element: <AdminTemplate />,
      children: [
        {
          index: true,
          element: <FilmsManager />,
        },
        {
          path: path.admin.addNew,
          element: <CreateFilms />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return route;
};

export default useRouteCustom;
