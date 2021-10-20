
import Sidebar from "../sidebar/Sidebar";
import "./../../assets/css/notification.css";
import { useEffect,useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Order from "./Order";
import { Message } from "../Dashboard/Message";

const Orders = () => {
  const [db, setDb] = useState(null);
  const [Error, setError] = useState(null);
  let iduser = sessionStorage.getItem("id");
  
  let url = `https://restaurantrestapi.herokuapp.com/api/order/users/${iduser}`;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.length > 0) {
          setDb(res);
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
                <h2 className="page-name">Notificaciones</h2>
              </div>
            </div>
          </header>
          {Error && (
        <Message
          msg={`Error a recargar`}
          bgColor="#dc3545"
        />
      )}
          <div className="col-1 box-content">
            <div className="noti-container">
              <div className="noti-header">
                <h2 className="noti-title">
                  {db&&<span>Ordenes totales  {db.length}</span>}
                </h2>
                <div className="filter">
                  <ul className="filter-list">
                    <li className="filter-item filter-active">Todos</li>
                    <li className="filter-item">Listo para el delivery</li>
                    <li className="filter-item">En proceso</li>
                    <li className="filter-item">Completado</li>
                  </ul>
                </div>
              </div>
              <div className="product-container">
                {db &&
                  db.map((order) => <Order key={order.idOrder} db={order} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Orders;
