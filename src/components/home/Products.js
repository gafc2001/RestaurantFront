import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Loader } from "../crud/Loader";
import { Message } from "../crud/Message";
import Header from "../Header";
import { helpHttp } from "../helpers/helpHttp";
import Product from "./Product";

export const Products = () => {
  const [db, setDb] = useState(null);
  // mensaje de error
  const [Error, setError] = useState(null);
  //  cargando
  const [Loading, setLoading] = useState(false);
  let api = helpHttp();
  let url = "https://restaurantrestapi.herokuapp.com/products";

  //controlar respuestas del servidor
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Menu de hoy </h1>
      <Header />
      <div className="container">
      {Loading && <Loader />}
      {Error && (
        <Message
          msg={`Error ${Error.status}:${Error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && db.map((product) => <Product key={product.idProduct} data={product} />)}
      </div>
    </div>
  );
};
