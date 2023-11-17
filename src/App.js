import React from 'react';
import Login from './pages/login';
import './App.css'; 


import Cabecalho from './componentes/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './componentes/home/Home';
import Pagina404 from './pages/404';
import CadUsu from './pages/usuarios';
import ListUsu from './pages/usuarios2';



function App() {
  return (
    <BrowserRouter>
      <div>
       
        <Routes>
        <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Pagina404 />} />
          <Route path='/cadusu' element={<CadUsu />} />
          <Route path='/listusu' element={<ListUsu />} />
          
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
