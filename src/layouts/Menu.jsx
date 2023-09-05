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
                    <Link to="/usuarios">Usuários</Link>
                </li>
                <li>
                    <Link to="/perdas">Perdas</Link>
                </li>
                <li>
                    <Link to="/receitas">Receitas</Link>
                </li>
                <li>
                    <Link to="/">Sair</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu;