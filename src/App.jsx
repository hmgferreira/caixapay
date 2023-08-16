import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Painel from './pages/Painel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Painel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
