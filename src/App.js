import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import CreateAccount from "./components/pages/CreateAccount";
import "./styles/App.css";
import "./styles/CreateAccount.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (correo, contraseña) => {
    const user = { correo, contraseña };
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      console.log("Datos guardados correctamente:", JSON.parse(storedUser));
    } else {
      console.log("Error al guardar los datos");
    }

    setLoggedInUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
