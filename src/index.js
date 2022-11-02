import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogements from "./pages/FicheLogements";
import Apropos from "./pages/APropos";
import PageError from "./pages/PageError";
import "./styles/main.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiche_logement" element={<FicheLogements />} />
      <Route path="/a_propos" element={<Apropos />} />
      <Route path="/*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
