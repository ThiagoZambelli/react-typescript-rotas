import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Menu />       
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />            
          </Route>
          <Route path='*' element={<NotFound />} />         
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default AppRoutes;