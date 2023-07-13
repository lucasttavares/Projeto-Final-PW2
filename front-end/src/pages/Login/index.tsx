import React, { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoImg from "../../assets/images/InForme.svg";
import Voltar from "../../assets/images/voltar.svg";
import logoIFPB from "../../assets/images/logo-ifpb.png"


import api from "../../services/api";
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await api
      .post("/login", {
        username,
        password,
      })
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("token", resp.data.Token);
        navigate("/list");
      })
      .catch((err) => {
        alert(err.response.data.Mensagem);
      });
  };
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logoImg} alt="logoinforme" className="logo"/>
        <h2> Destinado aos administradores do campus</h2>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <img src={logoIFPB} alt="Logo IFPB" className="logoIF" />
    </div>
  );
}

export default Login;
