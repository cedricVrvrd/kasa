import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import FicheLogement from "./pages/FicheLogement";
import Apropos from "./pages/APropos";
import PageError from "./pages/PageError";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/a_propos" element={<Apropos />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageError />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
