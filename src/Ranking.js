import React from "react";
import api from './api';
import {
  NavLink
} from "react-router-dom";
import Table from "react-bootstrap/Table";

function Ranking() {

  React.useEffect(() => {
    getRanking();
    getUltimaLeitura()
  }, []);

  const [atletas, setAtletas] = React.useState();
  const [dataLeitura, setDataLeitura] = React.useState();

  const getRanking = () => {
    api.get('')
      .then((response) => {
        setAtletas(response.data);
      })
      .catch((err) => console.error(err));
  }

  const getUltimaLeitura = () =>{
    api.get('/ultima-atualizacao')
      .then((response) => {
        setDataLeitura(response.data);
      })
      .catch((err) => console.error(err));
  }   

  // atletas.map(atleta => (
  //   console.log(atleta.nome)
  // ));

  const path = "/atleta/";
  if(atletas == null || !dataLeitura){
    return(<div className="ranking"><div class="lds-dual-ring"></div></div>);
  }
  else{
  return (
    <div className="ranking">
      <h1 id="ranking-title">TOP 100</h1>
      <h5>Última atualização: {dataLeitura[0].data}</h5>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {atletas.map((atleta, index) => (
            <tr>
              <td><NavLink className="atleta-pontos" to={path + atleta.nome}>{index+1}</NavLink></td> 
              <td><NavLink className="atleta-pontos" to={path + atleta.nome}>{atleta.nome}</NavLink></td>
              <td><NavLink className="atleta-pontos" to={path + atleta.nome}>{atleta.pontos}</NavLink></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
      } 
};

export default Ranking;