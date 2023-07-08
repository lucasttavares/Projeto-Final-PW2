import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/InForme.svg";
import homeImg from "../../assets/images/homeImg.svg";
import logoIFPB from "../../assets/images/logo-ifpb.png";
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
          <Link to="form" className="add">
            Escreva
          </Link>

          <Link to="list" className="feed">
            Leia
          </Link>

          <img src={logoIFPB} alt="Logo IFPB" className="logoIF" />
        </div>
      </div>
    </div>
  );
}

export default Home;
