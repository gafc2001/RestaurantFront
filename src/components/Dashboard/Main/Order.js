import React from "react";

export const Order = ({ order }) => {
  let { product, total } = order;
  return (
    <div className="summary-item">
      <div className="product-image center summary-product">
        <img
          src={`https://restaurantrestapi.herokuapp.com/api/products/${product.idProduct}/image`}
          alt={product.nameProduct}
        />
      </div>
      <div className="summary-desc">
        <div className="name">{product.nameProduct}</div>
        <div className="qty">{total} total de productos ordenados</div>
      </div>
    </div>
  );
};
