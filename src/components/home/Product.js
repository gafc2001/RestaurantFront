import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Product = ({data,addToCart}) => {
  let { idProduct, nameProduct, priceProduct, description } = data;
  return (
    <div className="card">
      
      <img src={`https://restaurantrestapi.herokuapp.com/products/${idProduct}/image`} alt={nameProduct}/>
      <h4>{nameProduct}</h4>
      <h5>${priceProduct}.00</h5>
      <p>
          {description}
      </p>
      <button className="btn btn-outline-secondary " onClick={()=> addToCart(idProduct)}>agregar</button>
    </div>
  );
};

export default Product;
