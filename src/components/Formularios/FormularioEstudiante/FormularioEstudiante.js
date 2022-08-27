import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateName, validateEmail, validateRegistration } from '../../../utils/validators';
import '../styles.css'

export const FormularioEstudiante = () => {

	const initialState = {
		name: '',
		registration: '',
		email: '',
		mensaje: '',
	};

	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	const handleSubmit = (valores, { resetForm }) => {
		resetForm();
		console.log('Formulario enviado');
		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
	}

	return (
		<div className='formulario-basico-container'>
			<Formik
				initialValues={initialState}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form className="formulario">
						<div>
							<label htmlFor="name">Nombre *</label>
							<Field
								type="text"
								id="name"
								name="name"
								placeholder="John Doe"
								validate={(name) => validateName(name)}
								required
							/>
							 {errors.name && touched.name && <ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />}
						</div>
						<div>
							<label htmlFor="registration">Matrícula *</label>
							<Field
								type="number"
								id="registration"
								name="registration"
								placeholder="2015000001"
								validate={(registration) => validateRegistration(registration)}
								required
							/>
							 {errors.registration && <ErrorMessage name="registration" component={() => (<div className="error">{errors.registration}</div>)} />}
						</div>
						<div>
							<label htmlFor="email">Correo *</label>
							<Field
								type="text"
								id="email"
								name="email"
								placeholder="correo@correo.com"
								validate={(email) => validateEmail(email)}
								required
							/>
							{errors.email && touched.email && <ErrorMessage name="email" component={() => (<div className="error">{errors.email}</div>)} />}
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
			</Formik>
		</div>
	);
}