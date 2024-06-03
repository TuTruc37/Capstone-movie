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
import ChiTietPhongVe from '../templates/ChiTietPhongVe';
import EditFilm from '../pages/Films/EditFilm/EditFilm';
import UserManager from '../pages/User/UserManage/UserManage';
import CreateUser from '../pages/User/CreateUser/CreateUser';
import Profile from '../pages/Profile/Profile';
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
        {
          path: `${path.admin.editFilms(':maPhim')}`, // Thêm đường dẫn động với tham số :maPhim
          element: <EditFilm />,
        },
      ],
    },
    {
      path: path.admin.quanLy,
      element: <AdminTemplate />,
      children: [
        {
          // index: true,
          path: path.admin.quanLy,
          element: <UserManager />,
        },
        {
          path: path.admin.quanLyNguoiDung,
          element: <CreateUser />,
        },
      ],
    },
    {
      path: path.profile,
      element: <Profile />,
    },
    {
      path: path.chiTietPhongVe,
      element: <ChiTietPhongVe />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return route;
};

export default useRouteCustom;
