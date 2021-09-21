import React,{ useState, useEffect, useReducer } from "react";
import { Loader } from "../Dashboard/Loader";
import { Message } from "../Dashboard/Message";
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
import { Header } from "./Header";
//paypal
import ReactDOM from "react-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const Products = () => {
  let url = "https://restaurantrestapi.herokuapp.com/api/products";
  //const [db, setDb] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { db, cart,purchase_units,subtotal,onecategory } = state;
  const [role,setrole] = useState(localStorage.getItem("role"))
  //para las respuestas de paypal
  const [Order,setOrder]=useState(null);
  
  
//para productos
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
  }, [url]);

  const filtCategory=(idCategory)=>{
    dispatch({ type: TYPES.READ_ONE_CATEGORY,payload:idCategory});
  }

  //para paypal

  const addToPay = () => {
    dispatch({ type: TYPES.ADD_TO_PAY});
  };
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


  //para paypal
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units:[purchase_units]
    });
  };

  const onApprove = async(data, actions) => {
    const order = await actions.order.capture();
    setOrder(order);
    console.log(order)
  //return actions.order.capture();
}


  return (
    <div className="parent">
      {console.log(cart)}
      <Sidebar  role={role}/>
      <div className="column-1 content">
          <Header  filtCategory={filtCategory}/>
        <main className="menu">
          <div className="menu-header">
            <p className="menu-title">Choose Dishes</p>
          </div>
          <div className="product-list">
            {Loading && <Loader />}
            {Error && (
              <Message
                msg={`Error ${Error.status}:${Error.statusText}`}
                bgColor="#dc3545"
              />
            )}
            
            {onecategory? onecategory&&(onecategory.map((product) => (
                <Product
                  key={product.idProduct}
                  data={product}
                  addToCart={addToCart}
                />
              ))):db && (db.map((product) => (
                <Product
                  key={product.idProduct}
                  data={product}
                  addToCart={addToCart}
                />
              )))}
          </div>
        </main>
      </div>

      <div className="column-2">
        <div className="order-title">
          <p>Orders #31234</p>
        </div>
        <div className="order-header order-grid">
          <p className="col-1">Item</p>
          <p className="col-2">Qty</p>
          <p className="col-3">Price</p>
        </div>
        <div className="order-list">
         {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
         ))}
        </div>
        <div className="order-resume">
          <div className="resume-item">
            <p className="resume-title">Discount</p>
            <p className="resume-mon">$0</p>
          </div>
          <div className="resume-item">
            <p className="resume-title">SubTotal</p>
            <p className="resume-mon">{subtotal}</p>
          </div>
        </div>
        <div className="btn-container">
          <a onClick={addToPay} className="btn btn-primary">
            Confirm you order
          </a>
        <PayPalButton onClick={addToPay}
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
        </div>
      </div>
    </div>
  );
};
