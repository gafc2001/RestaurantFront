import React from "react";
import clipboard from "../../assets/images/clipboard.png";
import { Link } from "react-router-dom";
const Order = ({db}) => {
    let {idOrder,totalPrice,statusOrder,description,orderDetails} =db
  return (
    <div className="product product-item completed">
        
      <Link  to={"/notifications/order/"+idOrder} className="product-content"  >
        <h2 className="center product-title">#{idOrder}</h2>
        <div className="product-image center">
          <img src={clipboard} />
        </div>
        <div className="product-info">
          <span className="product-name">{description}</span>
          <span className="product-details">
            <span>${totalPrice}</span> &bull;
            <span>6 units</span>
          </span>
        </div>
        </Link>
      <div className="btn-product center">
        <div className="status">{statusOrder}</div>
      </div>
    </div>
  );
};

export {Order};
