import React from "react";
import ProductCard from "../components/productCard/ProductCard";
import products from "../data";

//style
import './HomeScreen.css';


const HomeScreen = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
