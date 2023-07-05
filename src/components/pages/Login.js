import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-heading">Iniciar sesión</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" className="form-input" />
        </div>
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
