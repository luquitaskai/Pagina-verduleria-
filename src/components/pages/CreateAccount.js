import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIUNt9Glg7yQe0JdAq5FI7s2PPBny2QeI",
  authDomain: "verduleria-online-85069.firebaseapp.com",
  databaseURL: "https://verduleria-online-85069-default-rtdb.firebaseio.com",
  projectId: "verduleria-online-85069",
  storageBucket: "verduleria-online-85069.appspot.com",
  messagingSenderId: "654511928664",
  appId: "1:654511928664:web:9eb3a73acdf22ebcfd212d",
  measurementId: "G-ZSGGGGS58W",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
console.log(db);

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Guardar los datos del usuario en Firestore
      await addDoc(collection(db, "usuarios"), {
        email: email,
        password: password,
      });

      // Cuenta creada exitosamente, redirigir a la página de inicio de sesión
      history.push("/login");
    } catch (error) {
      // Error al crear la cuenta, mostrar mensaje de error
      console.log("Error al crear la cuenta:", error.message);
    }
  };

  return (
    <div className="create-account-container">
      <h2 className="create-account-heading">Crear una cuenta</h2>
      <form className="create-account-form" onSubmit={handleFormSubmit}>
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
        <button type="submit" className="create-account-button">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
