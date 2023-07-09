import React, { FormEvent, useState } from "react";
import { useNavigate} from 'react-router-dom';
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import iconAttention from "../../assets/images/Atenção.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./style.css"
import api from "../../services/api";

function InformeForm() {

  const navigate = useNavigate();

  const[name, setName] = useState("");
  const[avatar, setAvatar] = useState("");
  const[numero, setNumero] = useState("");
  const[bio, setBio] = useState("");

  const[subject, setSubject] = useState("")

  function handleCreatCard(e: FormEvent){
    e.preventDefault();

    api.post("cards",{
      name,
      avatar,
      numero,
      bio,
      subject
    }).then(() => {
      alert("Realizado cm sucesso")
      
      navigate("/");
    }).catch(() =>{
      alert("Erro")
    })

  }

  return (
    <div id="page-informe-list" className="container">
      <PageHeader 
      title="Faça seu comentario e seja ouvido"
      description="Mas antes você precisa preencher esse formulario"
      />

      <main>
        <form onSubmit={handleCreatCard}>
        <fieldset>
          <legend>Dados</legend>

          <Input name="name" label="Nome completo" value={name} onChange={(e) => {setName(e.target.value)}}/>
          <Input name="avatar" label="Link da sua foto" value={avatar} onChange={(e) => {setAvatar(e.target.value)}}/>
          <Input name="numero" label="Seu número" value={numero} onChange={(e) => {setNumero(e.target.value)}}/>
          <Textarea name="bio" label="Seu texto" value={bio} onChange={(e) => {setBio(e.target.value)}}/>

        </fieldset>

        <fieldset>
          <legend>Sobre você</legend>

          <Select 
            name="subject" 
            label="Cargo"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              {value: "Professor", label: "Professor"},
              {value: "Servidor", label: "Servidor"},
              {value: "Aluno", label: "Aluno"},
            ]}
          />
          
        </fieldset>

        <footer>
          <p>
          <img src={iconAttention} alt="Aviso IMportante"/>
          Importante! <br />
          Todos os dados precisam estar preenchidos  
          </p>
          <button type="submit">
            Salvar Infomações
          </button>
        </footer>
        </form>
      </main>
    </div>
  )
}

export default InformeForm;