import { useRoutes } from 'react-router-dom';
import { path } from '../common/path';
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
  ]);
  return route;
};

export default useRouteCustom;
