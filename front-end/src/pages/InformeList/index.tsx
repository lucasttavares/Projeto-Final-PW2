import React from "react";
import PageHeader from "../../components/PageHeader";


import "./style.css";


function InformeList() {
  return (
    <div id="page-informe-list" className="container">
      <PageHeader title="Essas foram os comentarios anteriores">
         <form id="search-informe"></form>
         <div className="input-block">
          <label htmlFor="subject">Cargo</label>
          <input type="text" id="subject"/>
         </div>
      </PageHeader>
        <main>
        </main>
    </div>
  )
}

export default InformeList;
