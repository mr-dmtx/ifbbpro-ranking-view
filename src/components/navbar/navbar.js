import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function NavBar() {
    return (
        <div>
        <Nav bg="light" className="justify-content-center" >
            <Nav.Item>
                <Nav.Link>
                    <NavLink id="linkInicio" exact="true" to="/">Início</NavLink>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <NavLink id="linkPontos" exact="true" to="/pontuacao">Sobre</NavLink>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <NavLink id="linkPontos" exact="true" to="/procurar">Procurar</NavLink>
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}

export default NavBar;