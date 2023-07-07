import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>Verdulería Online</h1>
      {location.pathname === "/login" ||
      location.pathname === "/create-account" ? (
        <Link to="/" className="back-button">
          Volver
        </Link>
      ) : (
        <Link to="/login" className="login-button">
          Iniciar sesión
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
