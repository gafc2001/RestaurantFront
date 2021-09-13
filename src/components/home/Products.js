import React from "react";
import { useState, useEffect,useReducer} from "react";
import { Loader } from "../crud/Loader";
import { Message } from "../crud/Message";
import Header from "../Header";
import { helpHttp } from "../helpers/helpHttp";
import Product from "./Product";
import CartItem from "./CartItem";
import {shoppingReducer,shoppingInitialState} from "../../reducers/shoppingReducer";
import { TYPES } from "../../acctions/shoppingAction";

export const Products = () => {
  let url = "https://restaurantrestapi.herokuapp.com/products";
  //const [db, setDb] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { db, cart } = state;
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          //setDb(res);
          setError(null);
        } else {
          //setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, []);

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  return (
    <div className="home">
      <div className="text-light">
        <h2>Welcome: {localStorage.getItem("username")} </h2>
        <h4>Menu de hoy </h4>
      </div>
      <Header />
      <div className="containerdish">
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

        <div className="cart-container">
          <h3>carrito</h3>
          {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
          ))}
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};
