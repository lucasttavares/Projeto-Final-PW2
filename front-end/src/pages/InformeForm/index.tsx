import React, { FormEvent, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/PageHeader/Input";
import iconAttention from "../../assets/images/Atenção.svg";
import Textarea from "../../components/PageHeader/Textarea";
import Select from "../../components/Select";

import "./style.css"
import { create } from "domain";

function InformeForm() {
  const[name, setName] = useState("");
  const[avatar, setAvatar] = useState("");
  const[numero, setNumero] = useState("");
  const[texto, setTexto] = useState("");

  function handleCreatClass(e: FormEvent){
    e.preventDefault();

    console.log({
      name,
      avatar,
      numero,
      texto
    })

  }

  return (
    <div id="page-informe-list" className="container">
      <PageHeader 
      title="Faça seu comentario e seja ouvido"
      description="Mas antes você precisa preencher esse formulario"
      />

      <main>
        <form onSubmit={handleCreatClass}>
        <fieldset>
          <legend>Dados</legend>

          <Input name="name" label="Nome completo" value={name} onChange={(e) => {setName(e.target.value)}}/>
          <Input name="avatar" label="Link da sua foto" value={avatar} onChange={(e) => {setAvatar(e.target.value)}}/>
          <Input name="numero" label="Seu número" value={numero} onChange={(e) => {setNumero(e.target.value)}}/>
          <Textarea name="texto" label="Seu texto" value={texto} onChange={(e) => {setTexto(e.target.value)}}/>

        </fieldset>

        <fieldset>
          <legend>Sobre você</legend>

          <Select 
            name="cargo" 
            label="Cargo"
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