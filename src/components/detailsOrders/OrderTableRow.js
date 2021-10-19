import React from "react";

const OrderTableRowOrder = ({item,quantity}) => {
    let {idProduct,nameProduct,priceProduct,category}=item
    return (

        <tr>
          <td className="card-image product-cell" colSpan="2">
            <img
              src={`https://restaurantrestapi.herokuapp.com/api/products/${idProduct}/image`}
            />
            <span>{nameProduct}</span>
          </td>
          <td>$ {priceProduct}</td>
          <td>{quantity}</td>
          <td>{category.nameCategory}</td>
          <td>{priceProduct*quantity}</td>
        </tr>
      );
    };
    
    export default OrderTableRowOrder;