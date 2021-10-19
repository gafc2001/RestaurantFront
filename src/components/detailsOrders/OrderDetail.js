import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import OrderTableRowOrder from "./OrderTableRow";
import { useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useParams } from "react-router";

const OrderDetail = () => {
  let { id } = useParams();

  const [Details, setDetails] = useState(null);
  const [Error, setError] = useState(null);
  let iduser = sessionStorage.getItem("id");


  let url = `https://restaurantrestapi.herokuapp.com/api/order/users/${iduser}`;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.length > 0) {
          res.map((detail) =>
            detail.idOrder == id ? setDetails(detail) : null
          );
          setError(null);
        } else {
          setError(res);
        }
      });
  }, []);
  return (
    <>
      <Sidebar />
     
      <div className="parent">
        <div className="content">
          <header className="header">
            <div className="header-info">
              <div className="page-info">
                <h2 className="page-name">Detalles</h2>
              </div>
            </div>
          </header>
          <div className="col-1 box-content">
            <div className="noti-container">
              <div className="noti-header">
                <h2 className="noti-title border-b">
                  Orden  #{id}
                  <span></span>
                </h2>
              </div>
              <div className="product-container">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Producto</td>
                      <td>Precio</td>
                      <td>Cantidad</td>
                      <td>Categorias</td>
                      <td>Total</td>
                    </tr>
                  </thead>
                  <tbody>
                      {Details&&Details.orderDetails.map(item=>(
                        <OrderTableRowOrder key={item.product.idProduct}  item={item.product} quantity={item.quantity}/>))}
                  </tbody>
                </table>
                {Details&&<h1>SUBTOTAL: {Details.totalPrice} </h1>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
