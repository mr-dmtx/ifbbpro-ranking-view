import React from "react";
import { useParams } from "react-router-dom";
import api from "./api";

function Atleta() {

    React.useEffect(() => {
        getAtletaData();
        // eslint-disable-next-line 
    }, []);

    const [atleta, setAtleta] = React.useState();
    const { atletaNome } = useParams();

    const getAtletaData = () => {
        api.get('/atleta/' + atletaNome)
            .then((response) => {
                setAtleta(response.data);
            })
            .catch((err) => console.error(err));
    }

    if (atleta == null) {
        return ("");
    }
    else {
        return (
            <div className="historico-atleta">
                <h1>{atletaNome}</h1>
                <hr></hr>
                {atleta.map(atleta => (
                    <p id="atleta-evento">{atleta.evento} - {atleta.categoria} - {atleta.posicao}º</p>
                ))}
            </div>
        );
    }
}

export default Atleta;