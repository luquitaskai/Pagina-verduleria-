import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // Los datos de inicio de sesión son correctos, redirigir a la página principal
      // Aquí debes agregar el código para redirigir a la página principal
    } catch (error) {
      // Los datos de inicio de sesión son incorrectos, mostrar mensaje de error
      setErrorMessage(
        "Los datos que ingresaste son incorrectos. Por favor, inténtalo nuevamente."
      );
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Iniciar sesión</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="create-account">
        ¿No tienes una cuenta?{" "}
        <Link to="/create-account">Crear una cuenta</Link>
      </div>
    </div>
  );
};

export default Login;
