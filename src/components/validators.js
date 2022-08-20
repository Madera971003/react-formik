

export const validateName = (value) => {
  if (!value) {
    return 'Por favor ingresa un nombre'
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value)) {
    return <label className="error">El nombre solo puede contener letras y espacios</label>
  }
}

export const validateEmail = (value) => {
  if (!value) {
    return 'Por favor ingresa un correo electronico';
  } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
    return 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo';
  }
}