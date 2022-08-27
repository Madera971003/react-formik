import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateName, validateEmail, validateLastName } from '../../../utils/validators';
import '../styles.css'

export const FormularioBasico = () => {

	const initialState = {
		name: '',
		lastName: '',
		email: '',
		mensaje: '',
	};

	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	// const next_initial_state = {
	// 	values: {
	// 		...initialState,
	// 		name: 'Name Test',
	// 		mensaje: 'Porfavor ingrese un mensaje aquí'
	// 	}
	// }

	const handleSubmit = (valores, { resetForm }) => {
		// resetForm(next_initial_state);
		resetForm();
		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
	}

	return (
		<div className='formulario-basico-container'>
			<Formik
				initialValues={initialState}
				onSubmit={handleSubmit}
			>
				{({ errors, touched, isValid, isSubmitting }) => (
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
							<label htmlFor="lastName">Apellidos</label>
							<Field
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Hdz"
								validate={(lastName) => validateLastName(lastName)}
							/>
							 {errors.lastName && touched.lastName && <ErrorMessage name="lastName" component={() => (<div className="error">{errors.lastName}</div>)} />}
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
							<Field
								name="pais"
								as="select"
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

						<button type="submit" disabled={!isValid || isSubmitting}>Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</div>
	);
}