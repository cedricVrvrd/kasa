import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogements from "./pages/FicheLogements";
import Apropos from "./pages/Apropos";
import PageError from "./pages/PageError";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiche_logement" element={<FicheLogements />} />
      <Route path="/a_propos" element={<Apropos />} />
      <Route path="/*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
