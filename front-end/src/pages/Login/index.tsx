import React, { useState, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


import api from '../../services/api';
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function login(e: FormEvent) {
    e.preventDefault();
    api
      .post("login", {
        username,
        password
      })
      .then(() => {
        alert("Realizado com sucesso");

        navigate("/");
      })
      .catch(() => {
        alert("Erro");
      });

  }
  return (
    <div className="login-form-container">
      <form onSubmit={login} className="login-form">
        <div className="input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => {setUsername(e.target.value);}} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value);}} />
        </div>
        <Link to="/list" >
          <button type="submit">Entrar</button>
        </Link>
        
      </form>
    </div>
  );
}

export default Login;
