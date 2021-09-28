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
import { Loader } from "../Dashboard/Loader";
import Sidebar from "../sidebar/Sidebar";
//moment importaciones
//import Moment from 'react-moment';
//import 'moment/locale/es';
//import "../../assets/css/home.css";
//import "../../assets/css/style.css";
import comida from "../../assets/images/oferta.png";

SwiperCore.use([EffectCoverflow, Pagination]);

const HomeView = () => {
  const [Products, setProducts] = useState([]);
  const [TableProducts, setTableProducts] = useState([]);
  const [Busqueda, setBusqueda] = useState("");
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
          setLoading(false);
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
      <Sidebar />
      <div class="column-1 content">
      <div class="homeview-header">
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
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                  Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                  Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                  Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                  Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div class="imgBx">
                  <img src={comida} />
                </div>
                <div class="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
        
        </Swiper>
        </div>
        <main class="menu">
          <div className="search-box">
            <input
              className="src"
              type="text"
              name="search"
              placeholder="Search for food, coffe, etc"
              autoComplete="off"
              value={Busqueda}
              onChange={handleChange}
            />
          </div>
          
          <div  class="product-list">
          {Products &&
            Products.map((product) => (
            <div key={product.idProduct} class="product-card">
              <div class="card-image center">
                <img src={`https://restaurantrestapi.herokuapp.com/api/products/${product.idProduct}/image`} alt={product.nameProduct} />
              </div>
              <div class="card-info">
                <p class="product-name">{product.nameProduct}</p>
                <p class="product-price">{product.description}</p>
                <p class="product-available">{product.category.nameCategory}</p>
              </div>
            </div>))}
          </div> 
        </main>
      </div>
      {/* <div className="homeview-header">
        <div class="textos-header">
          <h1>Te Damos La Bienvenida disfruta</h1>
          <h2>Conoce la carta</h2>
          <div className="search-box">
            <input
              className="src"
              type="text"
              name="search"
              value={Busqueda}
              placeholder="Search for food, coffe, etc"
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
      </div> */}
    </>
  );
};

export default HomeView;
