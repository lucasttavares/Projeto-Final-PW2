import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/PageHeader/Input";
import iconAttention from "../../assets/images/Atenção.svg";
import Textarea from "../../components/PageHeader/Textarea";
import Select from "../../components/Select";

import "./style.css"

function InformeForm() {
  return (
    <div id="page-informe-list" className="container">
      <PageHeader 
      title="Faça seu comentario e seja ouvido"
      description="Mas antes você precisa preencher esse formulario"
      />

      <main>
        <fieldset>
          <legend>Dados</legend>

          <Input name="name" label="Nome completo"/>
          <Input name="avatar" label="Link da sua foto"/>
          <Input name="numero" label="Seu número"/>
          <Textarea name="texto" label="Seu texto"/>

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
          <button type="button">
            Salvar Infomações
          </button>
        </footer>
      </main>
    </div>
  )
}

export default InformeForm;