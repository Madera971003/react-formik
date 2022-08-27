import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <section className='header-container'>
      <div>
        <Link to="/">
          Formularios con Formik
        </Link>
      </div>
      <nav id='menu'>
        <Link to="/formulario-basico">Básico</Link>
        <Link to="/formulario-estudiante">Estudiante</Link>
      </nav>
    </section>
  )
}
