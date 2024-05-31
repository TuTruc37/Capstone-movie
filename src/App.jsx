import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useRouteCustom from './routes/UseRouteCustom';

function App() {
  const myRoutes = useRouteCustom();
  return myRoutes;
}

export default App;
