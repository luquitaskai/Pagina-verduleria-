import React from "react";
import ProductCard from "./ProductCard";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Manzanas",
      description: "Deliciosas manzanas frescas",
      price: 2.99,
      image: "",
    },
    {
      id: 2,
      name: "Plátanos",
      description: "Plátanos maduros y sabrosos",
      price: 1.99,
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
    </div>
  );
};

export default Home;
