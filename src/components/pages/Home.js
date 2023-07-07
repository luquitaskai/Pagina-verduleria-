import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import ProductCard from "./ProductCard";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado
        setIsLoggedIn(true);
      } else {
        // El usuario no está autenticado
        setIsLoggedIn(false);
        // Redirigir a la página de inicio de sesión
        history.push("/login");
      }
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, [history]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirigir a la página de inicio de sesión
      history.push("/login");
    } catch (error) {
      console.log("Error al cerrar sesión:", error);
    }
  };

  const products = [
    {
      id: 1,
      name: "Manzanas",
      description: "Deliciosas manzanas frescas",
      price: 50,
      image: "",
    },
    {
      id: 2,
      name: "Bananas",
      description: "Bananas maduras y sabrosas",
      price: 40,
      image: "",
    },
    {
      id: 3,
      name: "Mandarinas",
      description: "Mandarinas sabrosas",
      price: 20,
      image: "",
    },
    // Agrega más productos aquí...
  ];

  return (
    <div className="app">
      <div className="logo-container"></div>
      <div className="description-container">
        <div className="description">
          <p>¡Bienvenido a nuestra verdulería online!</p>
        </div>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {isLoggedIn && (
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      )}
    </div>
  );
};

export default Home;
