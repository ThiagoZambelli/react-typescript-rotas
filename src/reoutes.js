import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio />}/>
        <Route path='/cardapio' element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;