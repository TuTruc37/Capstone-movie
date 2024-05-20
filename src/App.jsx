import useRouteCustom from "./routes/UseRouteCustom";
// import Fooder from "./layout/Fooder";
// import Detail from "./layout/Detail";
// import Header from "./layout/Header";

// import 'flowbite/css/flowbite.min.css';
function App() {
  const myRoutes = useRouteCustom();
    return myRoutes;
  //<>
  //   <div className="bg-slate-500">
  //     <Header/>
  //     <Detail />
  //     <Fooder />
  //   </div>

  // </>;
}

export default App;
