
const validatorRegex = {
  NAME: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  LAST_NAME: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  REGISTRATION: /^[0-9]{10}$/,
};

export const validateName = (value) => {
  if (!value) {
    return 'Por favor ingresa un nombre'
  } else if (!validatorRegex.NAME.test(value)) {
    return 'El nombre solo puede contener letras y espacios'
  }
}

export const validateLastName = (value) => {
  if (!value) {
    return ''
  } else if (!validatorRegex.LAST_NAME.test(value)) {
    return 'Apellido no válido'
  }
}

export const validateEmail = (value) => {
  if (!value) {
    return 'Por favor ingresa un correo electronico';
  } else if (!validatorRegex.EMAIL.test(value)) {
    return 'Correo no válido';
  }
}

export const validateRegistration = (value) => {
  if (!value) {
    return 'Ingrese su matrícula a 10 dígitos';
  } else if (!validatorRegex.REGISTRATION.test(value)) {
    return 'Matrícula no válida';
  }
}