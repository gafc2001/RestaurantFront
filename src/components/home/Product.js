import React from "react";
import "../home/home.css";
import"../home/style.css"
const Product = ({ data, addToCart }) => {
  let { idProduct, nameProduct, priceProduct, description } = data;
  return (
    <div class="product-card">
      <div class="card-image center">
        <img
          src={`https://restaurantrestapi.herokuapp.com/api/products/${idProduct}/image`}
          alt={nameProduct}
        />
      </div>
      <div class="card-info">
        <p class="product-name">{nameProduct}</p>
        <p class="product-price">${priceProduct}.00</p>
        <p class="product-available">{description}</p>
      </div>

      <button
        className="btn btn-outline-secondary "
        onClick={() => addToCart(idProduct)}
      > agregar
      </button>
    </div>
  );
};

export default Product;
