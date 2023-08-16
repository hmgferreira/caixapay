import React from 'react';
import Api from '../../config/Api';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

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
        <Container>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <div className='mt-3'>
                        <label>Login</label>
                        <input className='form-control' type="text" onChange={e => setLogin(e.target.value)}/>
                    </div>
                    <div className='mt-3'>
                        <label>Senha</label>
                        <input className='form-control' type="password" onChange={e => setSenha(e.target.value)} />
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-success btn-sm' onClick={logar}>Acessar</button>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Login;