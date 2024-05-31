import React from 'react';
import { useRoutes } from 'react-router-dom';
// Day la mot customHook ho tro quan li cac tuyen duong cua trang
import { path } from '../common/path';
import Detail from '../component/page/DetailPage/Detail';

const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.chiTiet,
      element: <Detail />,
    },
  ]);
  return route;
};

export default useRouteCustom;
