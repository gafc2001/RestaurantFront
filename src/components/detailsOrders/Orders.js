
import Sidebar from "../sidebar/Sidebar";
import "./../../assets/css/notification.css";
import { useEffect,useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Order from "./Order";

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
                <h2 className="page-name">Notifications</h2>
              </div>
            </div>
          </header>
          <div className="col-1 box-content">
            <div className="noti-container">
              <div className="noti-header">
                <h2 className="noti-title">
                  Orders <span>:</span>
                </h2>
                <div className="filter">
                  <ul className="filter-list">
                    <li className="filter-item filter-active">All</li>
                    <li className="filter-item">Ready for deliver</li>
                    <li className="filter-item">In process</li>
                    <li className="filter-item">Delivered</li>
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
