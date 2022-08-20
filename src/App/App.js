import React from 'react';
import Header from '../components/Header/Header';
import { FormularioBasico } from '../components/Formularios/FormularioBasico/Formulario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/formulario-basico' element={<FormularioBasico />}></Route>
          <Route path='/formulario-estudiante'></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
