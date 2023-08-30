import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Usuarios() {
    return (
        <>
            <div className='mt-3'></div>
            <Row>
                <Col md={10}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Pesquisa" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Link to="/usuarios/novo">
                        <Button variant='success'>Novo Usuário</Button>    
                    </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table hover striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Login</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Jose</td>
                                <td>jose</td>
                                <td>
                                    <Button variant='primary' size='sm'>Editar</Button>
                                    {` `}
                                    <Button variant='danger' size='sm'>Excluir</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Jose</td>
                                <td>jose</td>
                                <td>
                                    <Button variant='primary' size='sm'>Editar</Button>
                                    {` `}
                                    <Button variant='danger' size='sm'>Excluir</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>            
        </>
    )
}

export default Usuarios;