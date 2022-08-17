import React from "react";
import api from './api';
import {
  NavLink
} from "react-router-dom";

function Ranking() {

  React.useEffect(() => {
    getRanking();
  }, []);

  const [atletas, setAtletas] = React.useState();

  const getRanking = () => {
    api.get('')
      .then((response) => {
        setAtletas(response.data);
      })
      .catch((err) => console.error(err));
  }

  // atletas.map(atleta => (
  //   console.log(atleta.nome)
  // ));

  const path = "/atleta/";
  if(atletas == null){
    return("");
  }
  else{
  return (
    <div className="ranking">
      <h1 id="ranking-title">TOP 100</h1>
      {atletas.map((atleta, index) => (
        <p><NavLink className="atleta-pontos" to={path + atleta.nome}>{index+1}. {atleta.nome} - {atleta.pontos}</NavLink></p>
      ))}
    </div>
  );
      } 
};

export default Ranking;