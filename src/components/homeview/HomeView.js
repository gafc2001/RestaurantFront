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
import Sidebar from "../sidebar/Sidebar";
//moment importaciones
//import Moment from 'react-moment';
//import 'moment/locale/es';
//import "../../assets/css/home.css";
//import "../../assets/css/style.css";
import bebidas from "../../assets/images/bebidas.jpg";
import bebidascalientes from "../../assets/images/bebidascalientes.jpg";
import bocadillos from "../../assets/images/bocadillos.jpg";
import comidas from "../../assets/images/comidas.jpg";
import ensaladas from "../../assets/images/ensaladas.jpg";
import mariscos from "../../assets/images/mariscos.jpg";
import postres from "../../assets/images/postres.jpg";
import sopas from "../../assets/images/sopas.jpg";

import oferta1 from "../../assets/images/oferta1.png";
import oferta2 from "../../assets/images/oferta2.png";
import oferta3 from "../../assets/images/oferta3.png";
import oferta4 from "../../assets/images/oferta4.png";
import oferta5 from "../../assets/images/oferta5.png";
import oferta6 from "../../assets/images/oferta6.png";
import oferta7 from "../../assets/images/oferta7.png";
import oferta8 from "../../assets/images/oferta8.png";


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
      <section className="home-section">
        <div className="home-bg"></div>
        <div className="contenedor">
          <div className="row min-vh-100 align-item-center">
            <div className="home-text">
              <h1>Disfruta en Delibakery</h1>
              <p>
                Delibakery busca deleitar el paladar de nuestro exigente público
                con la excelente calidad de nuestros platos. Nos identificamos
                por el buen sabor y una atención de primera. Buscamos crear
                experiencias únicas para fidelizar a nuestros clientes y hacer
                más grande la familia Delibakery.
              </p>
              <a className="boton boton-default">Conoce la carta</a>
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
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta1} />
                </div>
                <div className="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta2} />
                </div>
                <div className="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta3} />
                </div>
                <div className="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta4} />
                </div>
                <div className="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta5} />
                </div>
                <div className="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta6} />
                </div>
                <div className="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta7} />
                </div>
                <div className="details">
                  <h3>
                    Este es la oferta
                    <br />
                    <span>este es la descripcion</span>
                  </h3>
                  <h4>5:00hrs</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="imgBx">
                  <img src={oferta8} />
                </div>
                <div className="details">
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
        </div>
      </section>
      <section className="categorias">
            <div className="contenedor2">
              <div className="section-title">
                <h2  data-title="Ordene Ahora">Nuestras Categorias</h2>
                </div>
                <div className="galeria-port">
                    <div className="imagen-port">
                        <img src={bebidas} alt=""/>
                        <div className="hover-galeria">
                            <h2>Bebidas</h2>
                            <p>Gran variedad de bebidas frías</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={bebidascalientes} alt=""/>
                        <div className="hover-galeria">
                        <h2>Bebidas calientes</h2>
                            <p>Bebidas calientes contra el frio</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={bocadillos} alt=""/>
                        <div className="hover-galeria">
                        <h2>Bocadillos</h2>
                            <p>Tortas de jamon y mucho más</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={comidas} alt=""/>
                        <div className="hover-galeria">
                        <h2>Comidas</h2>
                            <p>De todas las regiones del pais</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={ensaladas} alt=""/>
                        <div className="hover-galeria">
                        <h2>Ensaladas</h2>
                            <p>Comidas saludables para ti</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={mariscos} alt=""/>
                        <div className="hover-galeria">
                        <h2>Mariscos</h2>
                            <p>Del mar a tus manos</p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={postres} alt=""/>
                        <div className="hover-galeria">
                        <h2>Postres</h2>
                            <p>Todo tipo de postres </p>
                        </div>
                    </div>
                    <div className="imagen-port">
                        <img src={sopas} alt=""/>
                        <div className="hover-galeria">
                        <h2>Sopas</h2>
                            <p>Sopas veganas y vegetarianas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="productos">
          <div className="contenedor3">

        <div className="section-title">
                <h2  data-title="Ordene Ahora">Nuestros Productos</h2>
                </div>
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
            <div class="cards">
            {Products &&
            Products.map((product) => (
                <div  key={product.idProduct}  class="card">
                    <img src={`https://restaurantrestapi.herokuapp.com/api/products/${product.idProduct}/image`} alt={product.nameProduct}/>
                    <div class="contenido-texto-card">
                        <h4>{product.nameProduct}</h4>
                        <p>{product.description}</p>
                    </div>
                </div>
  ))}
            </div>
            </div>
        </section>
        
        {/* <footer>
        <div class="contenedor-footer">
            <div class="content-foo">
                <h4>Phone</h4>
                <p>292929</p>
            </div>
            <div class="content-foo">
                <h4>Email</h4>
                <p>Delibaker@gmail.com</p>
            </div>
            <div class="content-foo">
                <h4>Location</h4>
                <p>Ancon-Callao</p>
            </div>
        </div>
        <h2 class="titulo-final">&copy; Delibakery | Gustavo Farfan</h2>
    </footer> */}
        {/* <section className="column-1 content">
      <main className="menu">
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

        <div className="product-list">
          {Products &&
            Products.map((product) => (
              <div key={product.idProduct} className="product-card">
                <div className="card-image center">
                  <img
                    src={`https://restaurantrestapi.herokuapp.com/api/products/${product.idProduct}/image`}
                    alt={product.nameProduct}
                  />
                </div>
                <div className="card-info">
                  <p className="product-name">{product.nameProduct}</p>
                  <p className="product-price">{product.description}</p>
                  <p className="product-available">
                    {product.category.nameCategory}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </main>
      </section>
      <div className="homeview-header">
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
