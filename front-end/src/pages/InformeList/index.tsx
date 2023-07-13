import React, { FormEvent, useState, useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import logoIFPB from "../../assets/images/logo-ifpb.png";

import "./style.css";
import api from "../../services/api";
import InformeItem, { Informe } from "../../components/InformeItem";
import { useNavigate } from "react-router-dom";

function InformeList() {
  const navigate = useNavigate();
  const [informes, setInformes] = useState<any[]>([]);
  const [allInformes, setAllInformes] = useState<any[]>([]);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const key = localStorage.getItem("token");
    api
      .get("/cards", { headers: { Authorization: `${key}` } })
      .then((resp) => {
        setInformes(resp.data);
        setAllInformes(resp.data);
      })
      .catch((err) => {
        alert("Suas credenciais expiraram, realize login novamente");
        localStorage.clear();
        navigate("/login");
      });
  }, []);

  useEffect(() => {
    setAllInformes(
      informes.filter((informe: Informe) => {
        return informe.subject === subject;
      })
    );
  }, [subject]);

  /*   function handleSubmit(e: any) {
    e.preventDefault();
    searchInforme();
  } */

  return (
    <div id="page-informe-list" className="container">
      <PageHeader title="Esses foram os comentarios anteriores">
        <Select
          name="subject"
          label="Cargo"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          options={[
            { value: "Professor", label: "Professor" },
            { value: "Servidor", label: "Servidor" },
            { value: "Aluno", label: "Aluno" },
          ]}
        />
      </PageHeader>
      {allInformes.map((informe: Informe) => {
        return <InformeItem key={informe.id} informe={informe} />;
      })}
      <img src={logoIFPB} alt="Logo IFPB" className="logoIF" />
    </div>
  );
}

export default InformeList;
