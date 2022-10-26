import NavBar from "../components/navbar/navbar"
import Inicio from "../components/inicio/inicio";
import Pontuacao from "../components/pontuacao/pontuacao";
import Atleta from "../Atleta";
import Procurar from "../Procurar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { HashRouter, Route, Routes } from "react-router-dom";

function Main() {
    return (
        <Container fluid>
            <HashRouter>
                <Row>
                    <NavBar />
                </Row>
                <Row className="conteudo">
                    <div className="">
                        <Routes>
                            <Route exact path="/" element={<Inicio />} />
                            <Route path="/pontuacao" element={<Pontuacao />} />
                            <Route path="/atleta/:atletaNome" element={<Atleta />} />
                            <Route path="/procurar" element={<Procurar/>}/>
                        </Routes>
                    </div>
                </Row>
            </HashRouter>
        </Container>
    )
}

export default Main;