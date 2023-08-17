import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Painel</Link>
                </li>
                <li>
                    <Link to="/categorias">Categorias</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link to="/">Sair</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;