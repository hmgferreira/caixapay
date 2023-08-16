import React from 'react';
import Api from './config/Api';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Painel from './pages/Painel';

function App() {
  const[cep, setCep] = React.useState('');
  const[dados, setDados] = React.useState({
    tipo_logradouro: '',
    logradouro: ''
  });
  
  
  async function getCep() { 

    let cepLimpo = cep.replaceAll('-', '');
    alert(cepLimpo);
    
    const resposta = await Api.get(cepLimpo+'/json/');
    console.log(resposta.data);
    setDados(resposta.data);
    
    // axios.get('https://viacep.com.br/ws/'+cepLimpo+'/json/')
    // .then(function (resposta) {
    //   console.log(resposta);
    // })
    // .catch(function (er) {
    //   console.log(er);
    // });
    
  }

  return (
    <>
      {cep}
      <br />
      <input type="text" onChange={e => setCep(e.target.value)} />
      <button onClick={getCep}>Buscar CEP</button>
      <br />
      Seu Endereço é: {dados.tipo_logradouro} - {dados.logradouro} - {dados.bairro}
      <br />

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
