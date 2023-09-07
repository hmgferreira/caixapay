import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Produtos from './pages/Produtos';
import Categorias from './pages/Categorias';
import Perdas from './pages/Perdas';

import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutDefault from './layouts/LayoutDefault';
import Usuarios from './pages/Usuarios';
import UsuariosForm from './pages/Usuarios/UsuarioForm';
import Receitas from './pages/Receitas';
import ReceitaForm from './pages/Receitas/ReceitaForm';

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
      path: '/usuarios/editar/:id',
      element: <UsuariosForm />,
      isLayout: true,
    },
    {
      path: '/login',
      element: <Login />,
      isLayout: false,
    },
    {
      path: '/perdas',
      element: <Perdas />, 
      isLayout: true,
    },
    {
      path: '/receitas',
      element: <Receitas />, 
      isLayout: true,
    },
     {
      path: '/receitas/novo',
      element: <ReceitaForm />, 
      isLayout: true,
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
