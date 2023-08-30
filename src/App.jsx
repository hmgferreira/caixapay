import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Produtos from './pages/Produtos';
import Categorias from './pages/Categorias';

import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutDefault from './layouts/LayoutDefault';
import Usuarios from './pages/Usuarios';
import UsuariosForm from './pages/Usuarios/UsuarioForm';

function App() { 

  const rotas = [
    {
      path: '/',
      element: <Painel />,
      isLayout: true,
    },
    {
      path: '/produtos',
      element: <Produtos />, 
      isLayout: true,
    },
    {
      path: '/categorias',
      element: <Categorias />,
      isLayout: true,
    },
    {
      path: '/usuarios',
      element: <Usuarios />,
      isLayout: true,
    },
    {
      path: '/usuarios/novo',
      element: <UsuariosForm />,
      isLayout: true,
    },
    {
      path: '/login',
      element: <Login />,
      isLayout: false,
    },
  ];

  function checkLayout(item) {
    if(item.isLayout) {
      return (
        <LayoutDefault>
          {item.element}
        </LayoutDefault>
      )
    }

    return <>{item.element}</>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>

          {rotas.map((item, indice) => (
            <Route key={indice} path={item.path} element={checkLayout(item)} />
          ))}
          
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
