import React from "react";
import logoImg from "../../assets/images/InForme.svg";
import homeImg from "../../assets/images/homeImg.svg";
import "./styles.css";

function Home() {
  return (
    <div id="page-home">
      <div id="page-home-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo InForme" />
          <h2>Plataforma de </h2>
          <h2>ouvidoria do IFPB</h2>
        </div>

        <img src={homeImg} alt="Home" className="home-image" />

        <div className="buttons-container">
          <a href="a" className="add">
            Escreva
          </a>

          <a href="a" className="feed">
            Leia
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
