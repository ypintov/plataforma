import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const authentication = e => {
  e.preventDefault();
  const form = e.target;

  const data = {
    email: form.email.value,
    password: form.password.value
  }
  axios.post(`${process.env.REACT_APP_API_SEGURIDAD}/login`, data)
    .then(resp => {
      localStorage.setItem('token', resp.data.token)
      window.location = "/"
    }
    ).catch(e => alert('Error al iniciar sesión'));


}


const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesión</h1>
        <form onSubmit={authentication.bind()}>
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
            <input type="submit" className="button full" value="Iniciar sesión" />
          </div>
        </form>
        <div className="center">
          <p>¿No tienes cuenta de usuario? <Link to='/registro'>Crear cuenta</Link></p>
        </div>
      </div>
    </div>

  )
}

export default Login;
