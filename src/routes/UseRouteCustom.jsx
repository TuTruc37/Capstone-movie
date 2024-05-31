import { useRoutes } from 'react-router-dom';
// Day la mot customHook ho tro quan li cac tuyen duong cua trang
import { path } from '../common/path';
import Login from '../pages/LoginAndRegister/Login';
import Register from '../pages/LoginAndRegister/Register';
import NotFound from '../pages/NotFound/NotFound';
import AdminTemplate from '../templates/AdminTemplates/AdminTemplate';
import FilmsManager from '../pages/Films/FilmsManager/FilmsManager';
import CreateFilms from '../pages/Films/CreateFilms/CreateFilms';
import HomeTemplate from '../templates/homTemplate/HomeTemplate';
import HomePage from '../pages/homePage/HomePage';
import ChiTietPhongVe from '../templates/ChiTietPhongVe';
import EditFilm from '../pages/Films/EditFilm/EditFilm';
const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.trangChu,
    },
  ]);

  return route;
};

export default useRouteCustom;
