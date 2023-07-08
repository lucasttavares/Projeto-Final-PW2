import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InformeForm from "./pages/InformeForm";
import InformeList from "./pages/InformeList";

function RenderRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<InformeForm />} />
      <Route path="/list" element={<InformeList />} />
    </Routes>
  );
}

export default RenderRoutes;
