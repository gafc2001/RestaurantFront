import React from "react";
const Product = ({ data }) => {
  let { idProduct, nameProduct, priceProduct, description } = data;
  return (
    <div className="card">
      <img src={nameProduct} />
      <h4>{nameProduct}</h4>
      <h5>${priceProduct}.00</h5>
      <p>
          {description}
      </p>
      <button>Agregar</button>
    </div>
  );
};

export default Product;
