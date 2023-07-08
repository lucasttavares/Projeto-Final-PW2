import React from "react";
import { Link } from "react-router-dom";

import Voltar from "../../assets/images/Voltar.svg";

import "./style.css";

interface PageHeaderProps {
    title: string;
    children?: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
              <img src={Voltar} alt="Voltar" />
          </Link>
        </div>
        
        <div>
          <strong>{props.title}</strong>
          {props.children}
        </div>

      </header>
        );
}

export default PageHeader;