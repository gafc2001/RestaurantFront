import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import "./homeView.css";
// swiper importaciones
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "../../assets/css/swiper.css";
//moment importaciones
//import Moment from 'react-moment';
//import 'moment/locale/es';

SwiperCore.use([EffectCoverflow, Pagination]);

const HomeView = () => {
  const [Products, setProducts] = useState([]);
  const [TableProducts, setTableProducts] = useState([]);
  const [Busqueda, setBusqueda] = useState("");
  const [Error, setError] = useState(null);

  useEffect(() => {
    const getDataProducts = async () => {
      await helpHttp()
        .get("https://restaurantrestapi.herokuapp.com/api/products")
        .then((res) => {
          if (res.length > 0) {
            setProducts(res);
            setTableProducts(res);
          } else {
            setError(res);
          }
        });
    };
    getDataProducts();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (terminoBusqueda) => {
    var resultado = TableProducts.filter((el) => {
      if (
        el.nameProduct
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        el.description
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        el.category.nameCategory
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return el;
      }
    });
    setProducts(resultado);
  };

  return (
    <>
      <div className="homeview-header">
        <div class="textos-header">
          <h1>Te Damos La Bienvenida disfruta</h1>
          <h2>Conoce la carta</h2>
          <div className="box">
            <input
              className="src"
              type="text"
              name="search"
              value={Busqueda}
              placeholder="search"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          {Busqueda &&
            Products &&
            Products.map((product) => (
              <SwiperSlide key={product.idProduct}>
                <div class="imgBx">
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div class="details" >
                  <h3>
                    {product.nameProduct}
                    <br />
                    <span>{product.description}</span>
                  </h3>
                  <h4>{product.category.nameCategory}</h4>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeView;
