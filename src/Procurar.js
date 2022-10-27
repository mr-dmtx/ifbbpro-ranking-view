import React from "react";
import api from './api';
import { ReactDOM } from "react";
import {
  NavLink
} from "react-router-dom";
import Table from "react-bootstrap/Table";


function Procurar() {
const path = "/atleta/";
const [name, setName] = React.useState("");
const [results, setResults] = React.useState("");

const ProcurarAtleta = event => {
  
  setName(event.target.value);

  if(name.length >= 3){
    api.get('atleta/procurar/'+name)
      .then((response) => {
        setResults(response.data);
      })
      .catch((err) => console.error(err));
  }

};
  return (
    <div>
        <div>
            <input type="text" value={name} onChange={ProcurarAtleta} id="txtProcurar" placeholder="Procurar atleta" />
        </div>
        {results.length > 0 &&
        <Table responsive>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          
            {results.map((results, index) => (
              <tr>
                <td><NavLink className="atleta-pontos" to={path + results.nome}>{results.nome}</NavLink></td> 
                <td><NavLink className="atleta-pontos" to={path + results.nome}>{results.categoria}</NavLink></td>
                <td><NavLink className="atleta-pontos" to={path + results.nome}>{results.pontos}</NavLink></td>
              </tr>
            ))}
        </tbody>
      </Table>
      }
    </div>
  ); 
};

export default Procurar;