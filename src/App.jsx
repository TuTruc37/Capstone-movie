import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Detail from './layout/Detail';
import Fooder from './layout/Fooder/Fooder';

function App() {
  return (
    <div className="bg-slate-500">
      <Header />
      <Routes>
        <Route path='/chitiet/:id' element={<Detail />} />
      </Routes>
      <Fooder />
    </div>
  );
}

export default App;
