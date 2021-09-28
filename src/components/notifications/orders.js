import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./../../assets/css/notification.css";
import Order from "./Order";
// Import Swiper React components
import { helpHttp } from "../helpers/helpHttp";

export const Orders = () => {
  const [db, setDb] = useState(null);
  const [Error, setError] = useState(null);
  let iduser = sessionStorage.getItem("id");
  //let url = `https://restaurantrestapi.herokuapp.com/api/api/order/${iduser}`;
  let url = "https://restaurantrestapi.herokuapp.com/api/order";
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.length > 0) {
          console.log(res);
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
                  Orders <span>8</span>
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

                {/* <div className="product product-item preparing">
                  <div className="product-content">
                    <h2 className="center product-title" >Order #4523</h2>
                    <div className="product-image center">
                      <img src={clipboard} />
                    </div>
                    <div className="btn-product center">
                      <div className="status">
                        Preparing...
                      </div>
                    </div>
                  </div>
                  
                </Link>
                <Link to="/details">
                <div className="product product-item pending">
                  <div className="product-content">
                    <h2 className="center product-title" >Order #4523</h2>
                    <div className="product-image center">
                      <img src={clipboard} />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Product</span>
                      <span className="product-details">
                        <span>$100.0</span> &bull;
                        <span>Available</span>
                      </span>
                    </div>
                  </div>
                  <div className="btn-product center">
                    <div className="status">
                      Pending
                    </div>
                  </div>
                </div>
                </Link>
                <Link to="/details">
                <div className="product product-item completed">
                  <div className="product-content">
                    <h2 className="center product-title" >Order #4523</h2>
                    <div className="product-image center">
                      <img src={clipboard} />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Product</span>
                      <span className="product-details">
                        <span>$100.0</span> &bull;
                        <span>Available</span>
                      </span>
                    </div>
                  </div>
                  <div className="btn-product center">
                    <div className="status">
                      Completed
                    </div>
                  </div>
                </div>
                </Link>
                <Link to="/details">
                <div className="product product-item completed">
                  <div className="product-content">
                    <h2 className="center product-title" >Order #4523</h2>
                    <div className="product-image center">
                      <img src={clipboard} />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Product</span>
                      <span className="product-details">
                        <span>$100.0</span> &bull;
                        <span>Available</span>
                      </span>
                    </div>
                  </div>
                  <div className="btn-product center">
                    <div className="status">
                      Completed
                    </div>
                  </div>
                </div>
                </Link>
                <Link to="/details">
                <div className="product product-item completed">
                  <div className="product-content">
                    <h2 className="center product-title" >Order #4523</h2>
                    <div className="product-image center">
                      <img src={clipboard} />
                    </div>
                    <div className="product-info">
                      <span className="product-name">Product</span>
                      <span className="product-details">
                        <span>$100.0</span> &bull;
                        <span>Available</span>
                      </span>
                    </div>
                  </div>
                  <div className="btn-product center">
                    <div className="status">
                      Completed
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
