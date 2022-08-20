import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateName, validateEmail, validateLastName } from '../../../utils/validators';
import './styles.css'

const Formulario = () => {

	const initialState = {
		name: '',
		lastName: '',
		email: '',
	};

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

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
}

export default Formulario;