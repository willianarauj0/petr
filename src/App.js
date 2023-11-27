import React from 'react';
import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cabecalho from './componentes/header/header';
import Home from './componentes/home/Home';
import Pagina404 from './pages/404';
import Login from './pages/login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil'; 
import Petshop from './pages/Petshop'; 
import NavBar from './componentes/header/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Inclua o cabeçalho aqui se desejar que ele seja exibido em todas as rotas */}
        {/* <Cabecalho /> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/Home' element={<Home />} />
          <Route path='*' element={<Pagina404 />} />
          <Route path='/Perfil' element={<Perfil />} /> 
          <Route path='/Petshop' element={<Petshop />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

