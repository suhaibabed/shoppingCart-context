import { useContext } from 'react';
import React from "react";
import Rating from "../Rating/Rating";
import "./Productcard.css";
import cartContext from '../../context/cart/CartContext';

const ProductCard = ({ product }) => {
 
const {addToCart} = useContext(cartContext)

    //let opts = {format: "%S%v ", Symbol: "€" }


  return (
    <div className="productCard__wrapper">
      <div>
        <img
          className="productCard__img"
          src={product.image}
          alt="product-cart"
        />
        <h4>{product.name}</h4>
        <div className="roductCard__price">
        <h5>{product.price}$</h5>
        </div>
        <div className="ProductCard__Rating">
        <Rating 
        value={product.rating}
        text={`${product.numReviews} reviews `}        
        />
        </div>
    
        <button className="ProductCard__button"
        onClick={ ()=> addToCart(product) }
        >Add to basket</button>

      </div>
    </div>
  );
};

export default ProductCard;
