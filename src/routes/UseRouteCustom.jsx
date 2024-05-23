import { useRoutes } from 'react-router-dom';
import { path } from '../common/path';
import ChiTietPhongVe from '../templates/ChiTietPhongVe';

const useRouteCustom = () => {
  const route = useRoutes([
    // {
    //   path: path.trangChu,
    //   element: <HomeTemplate />,
    //   children: [
    //     {
    //       index: true,
    //       element: <HomePage />,
    //     },
    //   ],
    // },
    {
      path: 'chitietphongve/:maLichChieu',
      element: <ChiTietPhongVe />
    }
  ]);

  return route;
};

export default useRouteCustom;
