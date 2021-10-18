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
  //const [role,setrole] = useState(localStorage.getItem("role"))
  //para las respuestas de paypal
  //const [Order,setOrder]=useState(null);
  
  
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
  const removeCategory=(state)=>{
    dispatch({ type: TYPES.REMOVE_CATEGORY,payload:state});
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
    //console.log(order)
    orderSubmit(order);
  //return actions.order.capture();
}
const orderSubmit = (order) => {
  let products =[]
  order.purchase_units[0].items.map(product=>products.push({idproduct:product.sku,quantity:product.quantity}))

  let order_detail={
    iduser:sessionStorage.getItem("id"),
    status:"PENDIENTE",
    //status:order.status,
    subtotal: parseFloat(order.purchase_units[0].amount.value),
    orders:products,
    create_time:order.create_time,
    payment_method: 5
  }
  let options = {
    body: order_detail,
    headers: { "content-type": "application/json" },
  };
  console.log(JSON.stringify(order_detail))
  console.log(order_detail)
  helpHttp().post('https://restaurantrestapi.herokuapp.com/api/order', options).then((res) => {console.log(res)
  });

}
  return (
    <>
    <Sidebar/>
    <div className="parent">
      <div className="column-1 content f-column">
          <Header  filtCategory={filtCategory} removeCategory={removeCategory} />
        <main className="menu">
          <div className="menu-header">
            <p className="menu-title">Seleccion de productos</p>
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

      <div className="column-2 bg-primary">
        <div className="order-title">
          <p>Ordenes</p>
        </div>
        <div className="order-header order-grid">
          <p className="col-1">Item</p>
          <p className="col-2">Cantidad</p>
          <p className="col-3">Precio</p>
        </div>
        <div className="order-list">
         {cart && cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
         ))}
        </div>
        <div className="order-resume">
          <div className="resume-item">
            <p className="resume-title">Descuento</p>
            <p className="resume-mon">$0</p>
          </div>
          <div className="resume-item">
            <p className="resume-title">SubTotal</p>
            <p className="resume-mon">{subtotal}</p>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={addToPay} className="btn btn-primary">
            Confirma tu compra
          </button>
        <PayPalButton 
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
        </div>
      </div>
    </div>
    </>
  );
};
