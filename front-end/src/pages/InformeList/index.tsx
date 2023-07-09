import React, { FormEvent, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

import "./style.css";
import api from "../../services/api";
import InformeItem, {Informe} from "../../components/InformeItem";



function InformeList() {
  const [informes, setInformes] = useState([]);
  const [subject, setSubject] = useState("");

 async function searchInforme(e:FormEvent){
    e.preventDefault();

    const response = await api.get("cards",{
      params:{
        subject
      }
    });

    setInformes(response.data)
  }

  return (
    <div id="page-informe-list" className="container">
      <PageHeader title="Esses foram os comentarios anteriores">
         <form id="search-informe" onSubmit={searchInforme}>
         <Select 
            name="subject" 
            label="Cargo"
            value={subject}
            onChange={(e) =>{setSubject(e.target.value)}}
            options={[
              {value: "Professor", label: "Professor"},
              {value: "Servidor", label: "Servidor"},
              {value: "Aluno", label: "Aluno"},
            ]}
          />
          <button type="submit">
            Buscar
          </button>
         </form>
      </PageHeader>
        <main>
          {informes.map((informe: Informe)=>{
            return < InformeItem key={informe.id}informe={informe}/>;
          })}
        </main>
    </div>
  )
}

export default InformeList;
