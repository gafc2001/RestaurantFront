import React from "react";
import "../home/home.css";
import "../../assets/css/style.css";
const Product = ({ data, addToCart,totalQuantity}) => {
  let { idProduct, nameProduct, priceProduct,category,availableProduct} = data;
  return (
    <div className="product-card">
      <div className="card-image center">
        <img
          src={`https://restaurantrestapi.herokuapp.com/api/products/${idProduct}/image`}
          alt={nameProduct}
        />
      </div>
      <div className="card-info">
        <p className="product-name">{nameProduct}</p>
        <p className="product-price">${priceProduct}.00</p>
        <p className="product-available">{category.nameCategory}</p>
        {availableProduct?(<p className="product-available">Disponible</p>):(<p className="product-available">Agotado</p>)}
      </div>
      <div className="btn-container">
        <button className="btn btn-primary " onClick={() => (addToCart(idProduct),totalQuantity()) }>
          <i className="fas fa-shopping-cart"></i>  Agregar
        </button>
      </div>
    </div>
  );
};

export default Product;
