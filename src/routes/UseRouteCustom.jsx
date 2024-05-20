import React from 'react';
import { useRoutes } from 'react-router-dom';
// Day la mot customHook ho tro quan li cac tuyen duong cua trang
import { path } from '../common/path';
const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.trangChu,
    },
  ]);
  return route;
};

export default useRouteCustom;
