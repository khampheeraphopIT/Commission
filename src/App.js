import React from 'react';
import Refactor from './components/Refactor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Refactor/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
