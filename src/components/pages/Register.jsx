import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const registration = e => {
  e.preventDefault();

  const form = e.target;

  const data = {
    email: form.email.value,
    name: form.fullname.value,
    password: form.password.value
  };

  Axios.post(`${process.env.REACT_APP_API_SEGURIDAD}/signup`, data)
    .then(() => {
      alert('Usuario creado');
      window.location = '/login';
    })
    .catch(() => alert('Error al crear usuario'));

  console.log(data);

}

const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Crear cuenta</h1>
        <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="fullname">
              Nombre completo
            <input type="text" id="fullname" name="nombre" placeholder="Ingrese su nombre" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input type="email" id="email" name="email" placeholder="email" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Constraseña
            <input type="password" id="password" name="password" placeholder="Ingrese su constraseña" required />
            </label>
          </div>
          <div className="form_item">
            <input type="submit" className="button full" value="Crear cuenta" />
          </div>
        </form>
        <div className="center">
          <p>¿Ya tienes cuenta de usuario? <Link to='/login'>Iniciar sesión</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register;
