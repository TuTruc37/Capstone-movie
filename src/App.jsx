// import 'flowbite/css/flowbite.min.css';
import 'flowbite/dist/flowbite.css';
// import 'flowbite/css/flowbite.css';


import useRouteCustom from './routes/UseRouteCustom';
function App() {
  const myRoutes = useRouteCustom();
  return myRoutes;
}

export default App;
