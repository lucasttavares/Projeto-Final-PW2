import React from "react";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";

import "./style.css";



function InformeList() {
  return (
    <div id="page-informe-list" className="container">
      <PageHeader title="Essas foram os comentarios anteriores">
         <form id="search-informe">
         <Select 
            name="cargo" 
            label="Cargo"
            options={[
              {value: "Professor", label: "Professor"},
              {value: "Servidor", label: "Servidor"},
              {value: "Aluno", label: "Aluno"},
            ]}
          />
         </form>
      </PageHeader>
        <main>
        </main>
    </div>
  )
}

export default InformeList;
