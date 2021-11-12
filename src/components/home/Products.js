import React, { useState, useEffect, useReducer } from "react";
//para visa
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

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
import { Header } from "./Header";
//paypal
import ReactDOM from "react-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const Products = () => {
  let url = "https://restaurantrestapi.herokuapp.com/api/productsss";
  // let url = ""
  //const [db, setDb] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const [togglePayment, setTooglePayment] = useState(false);

  const initialForm = {
    fullname: "",
    lastname: "",
    address: "",
    phone: "",
  };
  const [Form, setForm] = useState(initialForm);
  //state para la targeta
  const stripe = useStripe();
  const elements = useElements();

  let activeClassPayment = {
    PAYPAL: 1,
    CONTRAENTREGA: 2,
    TARGETA: 3,
  };
  const [Payment, setPayment] = useState("");
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { db, cart, purchase_units, subtotal, onecategory, totalquantity } =
    state;

  //para productos
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.length > 0) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);
  const filtCategory = (idCategory) => {
    dispatch({ type: TYPES.READ_ONE_CATEGORY, payload: idCategory });
  };
  const removeCategory = (state) => {
    dispatch({ type: TYPES.REMOVE_CATEGORY, payload: state });
  };

  //para paypal
  const totalQuantity = () => {
    dispatch({ type: TYPES.INCREASE_QUANTITY });
  };
  const addToPay = () => {
    dispatch({ type: TYPES.ADD_TO_PAY });
  };
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    totalQuantity();
  };

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
      totalQuantity();
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
      totalQuantity();
    }
  };
  //para la targeta
  const cartSubmit = async () => {
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        address: {
          city: "lima",
          country: "PE",
          line1: Form.address,
        },
        email: sessionStorage.getItem("email"),
        name: `${Form.fullname} ${Form.lastname}`,
        phone: Form.phone,
      },
    });
    setLoading(true);
    if (!error) {
      const { id } = paymentMethod;
      try {
        let carddetails = {
          iduser: sessionStorage.getItem("id"),
          status: "PENDIENTE",
          idcard: id,
          amount: subtotal, //cents
          items: cart,
        };
        let options = {
          body: carddetails,
          headers: { "content-type": "application/json" },
        };
        helpHttp()
          .post(
            "https://restaurantrestapi.herokuapp.com/api/payments/stripe",
            options
          )
          .then((res) => {
            console.log(res);
          });

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log("Error", error);
      }
      setLoading(false);
    }
  };

  //para paypal
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [purchase_units],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    //console.log(order)
    orderSubmit(order);
    //return actions.order.capture();
  };

  const orderSubmit = (order) => {
    let products = [];
    order.purchase_units[0].items.map((product) =>
      products.push({ idproduct: product.sku, quantity: product.quantity })
    );

    let order_detail = {
      iduser: sessionStorage.getItem("id"),
      status: "PENDIENTE",
      //status:order.status,
      subtotal: parseFloat(order.purchase_units[0].amount.value),
      orders: products,
      create_time: order.create_time,
      payment_method: 5,
    };
    let options = {
      body: order_detail,
      headers: { "content-type": "application/json" },
    };

    helpHttp()
      .post("https://restaurantrestapi.herokuapp.com/api/order", options)
      .then((res) => {
        console.log(res);
      });
  };
  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userDetails = {
      firstName: Form.fullname,
      lastName: Form.lastname,
      phoneNumber: Form.phone,
      address: Form.address,
    };
    let options = {
      body: userDetails,
      headers: { "content-type": "application/json" },
    };
    let idcli = sessionStorage.getItem("id");
    if (idcli) {
      helpHttp()
        .post(
          `https://restaurantrestapi.herokuapp.com/api/users/${idcli}/profile`,
          options
        )
        .then((res) => {
          console.log(res);
        });
    }
    //console.log(Form)
  };
  return (
    <>
      <Sidebar />
      <div className="parent">
        <div className="column-1 content f-column">
          <Header filtCategory={filtCategory} removeCategory={removeCategory} />
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

              {onecategory
                ? onecategory &&
                  onecategory.map((product) => (
                    <Product
                      key={product.idProduct}
                      data={product}
                      addToCart={addToCart}
                    />
                  ))
                : db &&
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

        <div
          className={`column-2 bg-primary products ${
            toggleCart ? "toggleOrderLeft" : "toggleOrderRight"
          } ${togglePayment ? "togglePaymentRight" : ""}`}
        >
          <div
            className="btn btn-primary btn-cart"
            onClick={() => {
              setToggleCart(!toggleCart);
              setTooglePayment(false);
            }}
          >
            <span className="total-cart center">{totalquantity}</span>
            <i className="fas fa-shopping-cart"></i>
            <p>Mi carrito</p>
          </div>
          <div className="order-container">
            <div className="order-title">
              <p>Ordenes</p>
            </div>
            <div className="order-header order-grid">
              <p className="col-1">Item</p>
              <p className="col-2">Cantidad</p>
              <p className="col-3">Precio</p>
            </div>
            <div className="order-list">
              {cart &&
                cart.map((item, index) => (
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
              <button
                onClick={() => {
                  addToPay();
                  setTooglePayment(true);
                }}
                className="btn btn-primary"
              >
                Confirma tu compra
              </button>
            </div>
          </div>
          <div className="order-payment">
            <div className="payment-container">
              <div className="order-title">
                <p>Pago de order</p>
              </div>
              <div className="order-header"></div>
              <div className="payment-methods">
                <h3>Metodos de pagos</h3>
                <ul className="list-payment-methods">
                  <li
                    className={`payment-method ${
                      activeClassPayment[Payment] === 3 ? "active" : ""
                    }`}
                    onClick={() => {
                      setPayment("TARGETA");
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.2501 9.0001C1.2501 6.37675 3.37675 4.2501 6.0001 4.2501H18.0001C20.6234 4.2501 22.7501 6.37675 22.7501 9.0001V15.0001C22.7501 17.6235 20.6234 19.7501 18.0001 19.7501H6.0001C3.37674 19.7501 1.2501 17.6235 1.2501 15.0001V9.0001ZM2.83706 8.2501H21.1631C20.8246 6.81675 19.5369 5.7501 18.0001 5.7501H6.0001C4.46331 5.7501 3.17565 6.81675 2.83706 8.2501ZM21.2501 9.7501H2.7501V15.0001C2.7501 16.795 4.20517 18.2501 6.0001 18.2501H18.0001C19.795 18.2501 21.2501 16.795 21.2501 15.0001V9.7501ZM13.2501 15.0001C13.2501 14.5859 13.5859 14.2501 14.0001 14.2501H18.0001C18.4143 14.2501 18.7501 14.5859 18.7501 15.0001C18.7501 15.4143 18.4143 15.7501 18.0001 15.7501H14.0001C13.5859 15.7501 13.2501 15.4143 13.2501 15.0001Z"
                        fill="#3B5162"
                      />
                    </svg>
                    <span>Tarjeta</span>
                  </li>
                  <li
                    className={`payment-method ${
                      activeClassPayment[Payment] === 1 ? "active" : ""
                    }`}
                    onClick={() => {
                      setPayment("PAYPAL");
                    }}
                  >
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 5.2C16.2 6.2 17 8 17 10C17 12.5 14.5 14.5 12 14.5H9.4L8.8 18.1C8.75325 18.3293 8.62758 18.5349 8.44486 18.6811C8.26214 18.8272 8.03395 18.9047 7.8 18.9H5.1C5.02501 18.9015 4.95064 18.8861 4.88239 18.855C4.81415 18.8239 4.75378 18.7778 4.70577 18.7202C4.65775 18.6626 4.62331 18.5949 4.605 18.5222C4.58669 18.4494 4.58498 18.3735 4.6 18.3L4.8 16.9M7 11H9.5C12 11 14.5 8.5 14.5 6C14.5 3 12.6 1 9.5 1H4C3.5 1 3 1.5 3 2L1 16C1 16.5 1.5 17 2 17H4.8L6 12C6.1 11.4 6.4 11 7 11Z"
                        stroke="#3B5162"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>Paypal</span>
                  </li>
                  <li
                    className={`payment-method ${
                      activeClassPayment[Payment] === 2 ? "active" : ""
                    }`}
                    onClick={() => {
                      setPayment("CONTRAENTREGA");
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.188 0.5C17.3978 0.5 20 3.16116 20 6.44374V13.5563C20 16.8388 17.3978 19.5 14.188 19.5H5.81204C2.60219 19.5 0 16.8388 0 13.5563V6.44374C0 3.16116 2.60219 0.5 5.81204 0.5H14.188ZM14.188 1.98651H5.81204C3.40498 1.98651 1.45358 3.98213 1.45358 6.44374V13.5563C1.45358 16.0179 3.40498 18.0135 5.81204 18.0135H14.188C16.595 18.0135 18.5464 16.0179 18.5464 13.5563L18.546 13.279L15.3499 13.2798C13.5084 13.2787 12.0159 11.7531 12.0147 9.86949C12.0147 8.04914 13.4101 6.56244 15.1673 6.46431L15.3504 6.45916L18.546 6.459L18.5464 6.44374C18.5464 4.05454 16.7081 2.10431 14.3991 1.99165L14.188 1.98651ZM18.546 7.945L15.3508 7.94567C14.3109 7.94632 13.4683 8.80743 13.4683 9.86904C13.4689 10.8811 14.2329 11.7102 15.2033 11.7874L15.3504 11.7933L18.546 11.793V7.945ZM15.7942 9.06518C16.1956 9.06518 16.521 9.39795 16.521 9.80844C16.521 10.1847 16.2475 10.4957 15.8928 10.5449L15.7942 10.5517H15.4921C15.0907 10.5517 14.7653 10.2189 14.7653 9.80844C14.7653 9.43215 15.0388 9.12118 15.3935 9.07196L15.4921 9.06518H15.7942ZM10.3539 4.99736C10.7553 4.99736 11.0807 5.33013 11.0807 5.74062C11.0807 6.1169 10.8073 6.42788 10.4525 6.47709L10.3539 6.48388H5.12203C4.72063 6.48388 4.39524 6.15111 4.39524 5.74062C4.39524 5.36434 4.66866 5.05337 5.0234 5.00415L5.12203 4.99736H10.3539Z"
                        fill="#3B5162"
                      />
                    </svg>
                    <span>Contraentrega</span>
                  </li>
                </ul>
              </div>
              <div className="payment-user-info">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="label">Nombre</label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="fullname"
                        className="input"
                        placeholder="Su nombre"
                        onChange={handleChange}
                        value={Form.fullname}
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Apellidos</label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="lastname"
                        className="input"
                        placeholder="Sus apellidos"
                        onChange={handleChange}
                        value={Form.lastname}
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Direccion</label>
                    <div className="input-container">
                      <input
                        type="text"
                        name="address"
                        className="input"
                        placeholder="Ejmp: Av. Faucett Cdr. 5"
                        onChange={handleChange}
                        value={Form.address}
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Telefono</label>
                    <div className="input-container">
                      <input
                        type="number"
                        name="phone"
                        className="input"
                        placeholder="Su Telefono"
                        onChange={handleChange}
                        value={Form.phone}
                      ></input>
                    </div>
                  </div>
                  {Payment === "TARGETA" && <CardElement />}
                  <button type="submit" className="btn btn-primary">
                    confirmar datos
                  </button>
                </form>
              </div>
            </div>
            <div className="btn-container">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setTooglePayment(false)}
              >
                Cancelar
              </button>
              {Payment === "PAYPAL" && (
                <PayPalButton
                  createOrder={(data, actions) => createOrder(data, actions)}
                  s
                  onApprove={(data, actions) => onApprove(data, actions)}
                />
              )}
              {Payment === "TARGETA" && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => cartSubmit()}
                >
                  {Loading ? (
                    <div>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Pagar con visa"
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
