
// import Fooder from "./layout/Fooder";
// import Detail from "./layout/Detail";

import Header from "./layout/Header/Header";
import Detail from "./layout/Detail";
import Fooder from "./layout/Fooder/Fooder";

// import 'flowbite/css/flowbite.min.css';
function App() {
  // const myRoutes = useRouteCustom();
  // return myRoutes;
  return  <>
    <div className="bg-slate-500">
      <Header />
      <Detail />
      <Fooder />
    </div>

  </>;
}

export default App;
