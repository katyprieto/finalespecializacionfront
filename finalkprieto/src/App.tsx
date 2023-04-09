import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import { NumContext } from "./componentes/context/numcontext";
import { useState } from "react";

function App() {

  
  const [bottonReset,setBottonReset]= useState(false)

  return (
    <div className="App">
<NumContext.Provider value={{bottonReset,setBottonReset}}>

      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle" element={<PaginaDetalle />} />
      </Routes>
      </NumContext.Provider>
    </div>
  );
}

export default App;
