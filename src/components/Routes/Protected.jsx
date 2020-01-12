import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({ component: Component, ...rest }) => {

  const userLogged = localStorage.getItem('token');

  if (!userLogged) {
    return (
      <div>
        <Redirect to="/login" />
      </div>
    )
  }

  return <Route {...rest} render={Component} />

}

export default Protected;
