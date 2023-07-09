import React from 'react';

import api from '../../services/api';

import './style.css';

export interface Informe {
    id: number;
    name: string;
    avatar: string;
    numero: number;
    bio: string;
    subject: string;
}

interface InformeItemProps {
    informe: Informe ;
}

const InformeItem: React.FC<InformeItemProps> = ({ informe }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: informe.id,
    })
  }

  return (
    <article className="informe-item">
      <header>
        <img src={informe.avatar} alt={informe.name} />
        <div>
          <strong>{informe.name}</strong>
          <span>{informe.subject}</span>
        </div>
      </header>

      <p>{informe.bio}</p>

      <footer>
        
        <a 
          target="_blank" 
          onClick={createNewConnection} 
          href={`https://wa.me/${informe.numero}`}
        >
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default InformeItem;