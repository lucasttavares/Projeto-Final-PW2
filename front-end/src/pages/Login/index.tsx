import React, { useState, FormEvent} from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
   
const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await api.post('/login', {
        username,
        password,
      });
      console.log(response.data);
      navigate('/')
    } catch (error) {
      console.error('Erro de login', error);
    }
  };
  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
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
