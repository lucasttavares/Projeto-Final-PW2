import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function login() {
    const response = await api.get("admin", {
      params: {
        username,
        password
      },
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
