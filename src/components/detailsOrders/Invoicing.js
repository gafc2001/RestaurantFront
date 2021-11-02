import React,{ useState } from 'react'
import logo from"../../assets/images/logo-white.png";
import "./invoicing.css";
import OrderTableRowInvoicing from './OrderTableRowInvoicing';

const Invoicing = ({Details}) => {
   let {idOrder,createdAt,user,payment,totalPrice}=Details 
   const [toggle,setToggle] = useState(false);

    return (
        <div className="invoicing-container">
        <div onClick={() => {setToggle(!toggle)}} className="btn-toggle">
          <div className="btn btn-primary">Ver boleta</div>
        </div>
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
                    <td>Nro Boleta</td>
                    <td>#{idOrder}</td>
                  </tr>
                  <tr>
                    <td>Numero de cuenta</td>
                    <td>1234 1234 1234 1234</td>
                  </tr>
                  <tr>
                    <td>Fecha boleta</td>
                    <td>{createdAt}</td>
                  </tr>
                </div>
              </div>
            </div>
          </header>
          <div class="invoicing-center">  
            <div class="header-description">
              <div class="invoice-user-detail">
                <h4>Boleta a:</h4>
                <p className="invoice-name">{user.username}</p>
                <p className="invoice-detail">Direccion Aeropuerto</p>
                <p className="invoice-detail">Phone +51 976543212</p>
                <p className="invoice-detail">Email: {user.email}</p>
              </div>
              <div class="invoice-payment-method">
                <h3>Metodo de pago</h3>
                <p>Nmro de cuenta: 1234 1234 1234 1234</p>
                <p>Nombre de cuenta: {user.username}</p>
                <p>Nombre del metodo de pago: {payment[0].paymentMethod.namePaymentMethod}</p>
              </div>
            </div>
            <div className="invoicing-table-container">
                <table className="invoicing-table">
                  <thead>
                    <td>Nombre</td>
                    <td>Descripcion Unidad</td>
                    <td>Precio Unit.</td>
                    <td>Cant.</td>
                    <td>Total</td>
                  </thead>
                  <tbody>
                  {Details &&
                      Details.orderDetails.map((item) => (
                        <OrderTableRowInvoicing
                          key={item.product.idProduct}
                          item={item.product}
                          quantity={item.quantity}
                        />
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="1">Subtotal</td>
                      <td colSpan="3"></td>
                      <td colSpan="1">${(totalPrice/1.18).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan="1">Descuento</td>
                      <td colSpan="3"></td>
                      <td colSpan="1">$0.0</td>
                    </tr>
                    <tr>
                      <td colSpan="1">IGV(18%)</td>
                      <td colSpan="3"></td>
                      <td colSpan="1">${(totalPrice*0.18).toFixed(2)}</td>
                    </tr>
                    <tr className="tfoot-total">
                      <td colSpan="4">Total</td>
                      <td colSpan="1">${totalPrice}</td>
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
    )
}

export default Invoicing
