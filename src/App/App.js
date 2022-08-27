import React from 'react';
import Header from '../components/Header/Header';
import { FormularioBasico } from '../components/Formularios/FormularioBasico/FormularioBasico';
import { FormularioEstudiante } from '../components/Formularios/FormularioEstudiante/FormularioEstudiante';
import InfoGeneral from '../components/InfoGeneral/InfoGeneral';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<InfoGeneral />}></Route>
          <Route path='/formulario-basico' element={<FormularioBasico />}></Route>
          <Route path='/formulario-estudiante' element={<FormularioEstudiante />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
