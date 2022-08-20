import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className='header-container'>
      <div>
        <span>Formularios con Formik</span>
      </div>
      <nav id='menu'>
        <Link to="/formulario-basico">Básico</Link>
        <Link to="/formulario-estudiante">Estudiante</Link>
      </nav>
    </section>
  )
}
