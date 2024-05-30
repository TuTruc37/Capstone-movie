import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Detail from './layout/Detail';
import Fooder from './layout/Fooder/Fooder';

function App() {
  return (
    <div className="bg-black">
      <Header />
      {/* <Routes>
        <Route path='/chitiet/1322' element={<Detail />} />
      </Routes> */}
      <Detail />
      <Fooder />
    </div>
  );
}

export default App;
