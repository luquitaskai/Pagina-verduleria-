import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Verdulería Online</h1>
      {location.pathname !== "/login" ? (
        <Link to="/login" className="login-button">
          Iniciar sesión
        </Link>
      ) : (
        <Link to="/" className="back-button">
          Volver
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
