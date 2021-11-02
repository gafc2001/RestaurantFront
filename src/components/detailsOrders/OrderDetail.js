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
import "./invoicing.css";
import logo from"../../assets/images/logo-white.png";
import OrderTracking from "./OrderTracking";
const OrderDetail = () => {
  let { id } = useParams();

  const [Details, setDetails] = useState(null);
  const [Error, setError] = useState(null);
  let iduser = sessionStorage.getItem("id");
  const [toggle,setToggle] = useState(false);
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
              
              <OrderTracking Details={Details}/>
              <div onClick={() => {setToggle(!toggle)}} className="btn-toggle">
                <div className="btn btn-primary">Ver boleta</div>
              </div>
              <div className="invoicing-container">
                <div className={`invoicing-content ${toggle?'toggleDown':'toggleUp'}`}>
                  <header className="invoicing-header">
                    <div className="header-info invoicing">
                      <div className="company-info">
                        <img src={logo} alt="logo"/>
                      </div>
                      <div className="invoicing-info">
                        <div className="invoicing-detail">
                          <h3>Boleta</h3>
                          <tr>
                            <td>Nmro Boleta</td>
                            <td>#123123</td>
                          </tr>
                          <tr>
                            <td>Numero de cuenta</td>
                            <td>1234 1234 1234 1234</td>
                          </tr>
                          <tr>
                            <td>Fecha boleta</td>
                            <td>15 de Agosto de 2001</td>
                          </tr>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div class="invoicing-center">  
                    <div class="header-description">
                      <div class="invoice-user-detail">
                        <h4>Boleta a:</h4>
                        <p className="invoice-name">Gustavo Farfan</p>
                        <p className="invoice-detail">Direccion Aeropuerto</p>
                        <p className="invoice-detail">Phone +51 976543212</p>
                        <p className="invoice-detail">Email: ejemplo@hotmail.com</p>
                      </div>
                      <div class="invoice-payment-method">
                        <h3>Metodo de pago</h3>
                        <p>Nmro de cuenta: 1234 1234 1234 1234</p>
                        <p>Nombre de cuenta: Gustavo Farfan</p>
                        <p>Nombre de empresa: BBVA</p>
                      </div>
                    </div>
                    <div className="invoicing-table-container">
                        <table className="invoicing-table">
                          <thead>
                            <td>Fecha</td>
                            <td>Descripcion Unidad</td>
                            <td>Precio Unit.</td>
                            <td>Cant.</td>
                            <td>Total</td>
                          </thead>
                          <tbody>
                            <tr>
                              <td>15 de Agosto de 2020</td>
                              <td>Producto 1</td>
                              <td>$300</td>
                              <td>2</td>
                              <td>$600</td>
                            </tr>
                            <tr>
                              <td>15 de Agosto de 2020</td>
                              <td>Producto 1</td>
                              <td>$300</td>
                              <td>2</td>
                              <td>$600</td>
                            </tr>
                            <tr>
                              <td>15 de Agosto de 2020</td>
                              <td>Producto 1</td>
                              <td>$300</td>
                              <td>2</td>
                              <td>$600</td>
                            </tr>
                            <tr>
                              <td>15 de Agosto de 2020</td>
                              <td>Producto 1</td>
                              <td>$300</td>
                              <td>2</td>
                              <td>$600</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="1">Subtotal</td>
                              <td colSpan="3"></td>
                              <td colSpan="1">$asd</td>
                            </tr>
                            <tr>
                              <td colSpan="1">Descuento</td>
                              <td colSpan="3"></td>
                              <td colSpan="1">$0.0</td>
                            </tr>
                            <tr>
                              <td colSpan="1">IGV(18%)</td>
                              <td colSpan="3"></td>
                              <td colSpan="1">$315</td>
                            </tr>
                            <tr className="tfoot-total">
                              <td colSpan="4">Total</td>
                              <td colSpan="1">$5123</td>
                            </tr>
                          </tfoot>
                        </table>
                    </div>
                    <footer className="invoicing-footer">
                      <div className="footer-info">
                        <h4>Terminos y condiciones</h4>
                        <p>lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip</p>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
