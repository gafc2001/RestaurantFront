import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import OrderTableRowOrder from "./OrderTableRow";
import { useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useParams } from "react-router";
import pagadoactual from "../../assets/images/seguimiento/pagadoactual.gif";
import finalizado from "../../assets/images/seguimiento/finalizado.gif";
import pagado from "../../assets/images/seguimiento/pagado.png";
import noenviado from "../../assets/images/seguimiento/noenviado.png";
import enviado from "../../assets/images/seguimiento/enviado.png";
import preparacion from "../../assets/images/seguimiento/preparacion.png";
import "./tracker.css";
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
          res.map((Orderselect) =>
            Orderselect.idOrder === parseInt(id)
              ? setDetails(Orderselect)
              : null
          );
          //console.log(Details.statusOrder)
          setError(null);
        } else {
          setError(res);
        }
      });
  }, [url]);
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
          {Error && <h1>ha ocurrido un error</h1>}
          <div className="col-1 box-content">
            <div className="noti-container">
              <div className="noti-header">
                <h2 className="noti-title border-b">
                  Orden #
                  <span>{id}</span>
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
                    {Details &&
                      Details.orderDetails.map((item) => (
                        <OrderTableRowOrder
                          key={item.product.idProduct}
                          item={item.product}
                          quantity={item.quantity}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="segui-header">
                <h2 className="segui-title border-c">
                Historial de seguimiento:
                
                </h2>
              </div>
              {Details && (
                <div className="progressInfo">
                  {Details.statusOrder === "COMPLETADO" && (
                    <div className="nav-steps">
                      <div className="nav-step">
                        <div className="step-content">
                          <img className="step-img" src={pagado} alt="compra" />
                          <p className="step-info"> Pagado</p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={preparacion}
                            alt="compra"
                          />
                          <p className="step-info">Preparando</p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={enviado}
                            alt="compra"
                          />
                          <p className="step-info"> Enviando</p>
                        </div>
                      </div>
                      <div className="end nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={finalizado}
                            alt="compra"
                          />
                          <h1>Estado actual:</h1>
                          <p className="step-info">
                            El producto a sido entregado con éxito
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {Details.statusOrder === "ENVIANDO" && (
                    <div className="nav-steps">
                      <div className="nav-step ">
                        <div className="step-content">
                          <img className="step-img" src={pagado} alt="compra" />
                          <p className="step-info"> Pagado</p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={preparacion}
                            alt="compra"
                          />
                          <p className="step-info">Preparando</p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={enviado}
                            alt="compra"
                          />
                          <h1>Estado actual:</h1>
                          <p className="step-info">
                            Su producto ha sido enviado
                          </p>
                        </div>
                      </div>
                      <div className="end nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={noenviado}
                            alt="compra"
                          />
                          <p className="step-info">Completado</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {Details.statusOrder === "PREPARANDO" && (
                    <div className="nav-steps">
                      <div className="nav-step">
                        <div className="step-content">
                          <img className="step-img" src={pagado} alt="compra" />
                          <p className="step-info"> Pagado</p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={preparacion}
                            alt="compra"
                          />
                          <h1>Estado actual:</h1>
                          <p className="step-info">
                            Su producto esta siendo preparado
                          </p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={noenviado}
                            alt="compra"
                          />
                          <p className="step-info">Enviando</p>
                        </div>
                      </div>
                      <div className="end nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={noenviado}
                            alt="compra"
                          />
                          <p className="step-info">Completado</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {Details.statusOrder === "PENDIENTE" && (
                    <div className="nav-steps">
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={pagadoactual}
                            alt="compra"
                          />
                          <h1>Estado actual:</h1>
                          <p className="step-info">
                            Su producto se encuentra pagado
                          </p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={noenviado}
                            alt="compra"
                          />
                          <p className="step-info">Preparando</p>
                        </div>
                      </div>
                      <div className="nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={noenviado}
                            alt="compra"
                          />
                          <p className="step-info">Enviando</p>
                        </div>
                      </div>
                      <div className="end nav-step">
                        <div className="step-content">
                          <img
                            className="step-img"
                            src={noenviado}
                            alt="compra"
                          />
                          <p className="step-info">Completado</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
