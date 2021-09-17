import React from "react";
import { useState, useEffect, useReducer } from "react";
import { Loader } from "../crud/Loader";
import { Message } from "../crud/Message";
import { helpHttp } from "../helpers/helpHttp";
import Product from "./Product";
import CartItem from "./CartItem";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../../reducers/shoppingReducer";
import { TYPES } from "../../acctions/shoppingAction";
import Sidebar from "../sidebar/Sidebar";

import "../../assets/css/style.css";
import "../home/home.css";
import "../home/sidebar.css"

export const Products = () => {
  let url = "https://restaurantrestapi.herokuapp.com/api/products";
  //const [db, setDb] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { db, cart } = state;
  const [role,setrole] = useState(localStorage.getItem("role"))
  
  
  
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.length>0) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA});
          setError(res);
        }
        setLoading(false);
      });
  }, []);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  return (
    <div className="parent">
      <Sidebar  role={role}/>
      <div class="column-1 content">
        <header class="header">
          <div class="header-info">
            <div class="page-info">
              <h2 class="page-name">{localStorage.getItem("username")}</h2>
              <p class="date">Tuesday, 2 Feb 2021</p>
            </div>
            <div class="input-container input-center ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3415 19.2089C20.7052 19.2089 21 19.498 21 19.8545C21 20.1813 20.7523 20.4514 20.4308 20.4941L20.3415 20.5H13.471C13.1073 20.5 12.8125 20.211 12.8125 19.8545C12.8125 19.5277 13.0602 19.2576 13.3816 19.2148L13.471 19.2089H20.3415ZM13.6592 4.41662C14.906 3.19446 16.9283 3.19446 18.175 4.41662L19.4694 5.6854C20.7162 6.90755 20.7162 8.88985 19.4694 10.112L9.74061 19.6486C9.1843 20.1939 8.43007 20.4999 7.64282 20.4999H3.65854C3.28841 20.4999 2.99098 20.201 3.00021 19.8383L3.10043 15.8975C3.12036 15.1526 3.43127 14.4425 3.96867 13.9157L13.6592 4.41662ZM12.906 6.979L4.89998 14.8287C4.60126 15.1215 4.42814 15.5169 4.41707 15.9305L4.33345 19.2084L7.64282 19.2088C8.03222 19.2088 8.4067 19.0745 8.70228 18.8317L8.8093 18.7357L16.855 10.849L12.906 6.979ZM17.2437 5.32953C16.5113 4.61156 15.323 4.61156 14.5905 5.32953L13.838 6.066L17.786 9.936L18.5381 9.19909C19.2298 8.52101 19.2683 7.44433 18.6534 6.72195L18.5381 6.59831L17.2437 5.32953Z"
                  fill="#3B5162"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for food, coffe, etc"
                class="input"
              />
            </div>
          </div>
          <div class="categories">
            <ul class="category-list">
              <li class="category-item category-active">
                <span>Hot Dishes</span>
              </li>
              <li class="category-item">Fast Food</li>
              <li class="category-item">Soups</li>
              <li class="category-item">Desserts</li>
              <li class="category-item">Salads</li>
            </ul>
          </div>
        </header>

        <main class="menu">
          <div class="menu-header">
            <p class="menu-title">Choose Dishes</p>
          </div>
          <div class="product-list">
            {Loading && <Loader />}
            {Error && (
              <Message
                msg={`Error ${Error.status}:${Error.statusText}`}
                bgColor="#dc3545"
              />
            )}
            {db &&
              db.map((product) => (
                <Product
                  key={product.idProduct}
                  data={product}
                  addToCart={addToCart}
                />
              ))}
          </div>
        </main>
      </div>

      <div class="column-2">
        <div class="order-title">
          <p>Orders #31234</p>
        </div>
        <div class="order-header order-grid">
          <p class="col-1">Item</p>
          <p class="col-2">Qty</p>
          <p class="col-3">Price</p>
        </div>
        <div class="order-list">
         {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
         ))}
        </div>
        <div class="order-resume">
          <div class="resume-item">
            <p class="resume-title">Discount</p>
            <p class="resume-mon">$0</p>
          </div>
          <div class="resume-item">
            <p class="resume-title">SubTotal</p>
            <p class="resume-mon">$24.30</p>
          </div>
        </div>
        <div class="btn-container">
          <a href="#" class="btn btn-primary">
            Continue to Payment
          </a>
        </div>
      </div>
    </div>
  );
};
