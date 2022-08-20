import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateName, validateEmail } from './validators';

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	const handleSubmit = (valores, { resetForm }) => {
		resetForm();
		console.log('Formulario enviado');
		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
	}

	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text"
								id="nombre"
								name="nombre"
								placeholder="John Doe"
								validate={(nombre) => validateName(nombre)}
							/>
							 {errors.nombre && touched.nombre && <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />}
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text"
								id="correo"
								name="correo"
								placeholder="correo@correo.com"
								validate={(email) => validateEmail(email)}
							/>
							{errors.correo && touched.correo && <ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />}
						</div>

						<div>
							<Field
								name="pais"
								as="select"
								// onChange={e => {
								// 	console.log('e', e)
								// 	const indexOption = e.target.selectedIndex;
								// 	console.log('indexOption', indexOption);
								// 	const valueOption = e.target[indexOption].getAttribute('value');
								// 	console.log('valueOption', valueOption);
								// }}
							>
								<option value="mexico">Mexico</option>
								<option value="España">España</option>
								<option value="Argentina">Argentina</option>
								<option value="Honduras">Honduras</option>
								<option value="Jamaica">Jamaica</option>
								<option value="Perú">Perú</option>
								<option value="Venezuela">Venezuela</option>
							</Field>
						</div>

						<div>
							<label>
								<Field type="radio" name="sexo" value="hombre" /> Hombre
							</label>
							<label>
								<Field type="radio" name="sexo" value="mujer" /> Mujer
							</label>
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}


				{/* {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
					<form className="formulario" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input 
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe" 
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>

							{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<input 
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
						</div>
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</form>
				)} */}
			</Formik>
		</>
	);
}

export default Formulario;