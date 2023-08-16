import React from 'react';
import Api from '../../config/Api';
import { useNavigate } from 'react-router-dom';

function Login() {

    const[login, setLogin] = React.useState('');
    const[senha, setSenha] = React.useState('');
    const navigate = useNavigate();

    async function logar() {
        const resposta = await Api.get('usuarios?login=admin');
        if(resposta.data.length > 0) {
            const dados = resposta.data;
            const usuario = dados[0];
            if(usuario.senha == senha) {
                alert("Usuario logado");
                navigate('/');

            } else {
                alert("Usuario incorreto");
            }
        }
    }

    return (
        <>
            <input type="text" onChange={e => setLogin(e.target.value)}/>
            <input type="password" onChange={e => setSenha(e.target.value)} />
            <button onClick={logar}>Acessar</button>
        </>
    )
}

export default Login;