import React, { useState, useEffect } from "react";
import { ModalForm } from "./ModalForm";
import CrudTablePro from "./CrudTablePro";
import { helpHttp } from "../../helpers/helpHttp";
import { Message } from "../Message";
import { Loader } from "../Loader";
import Sidebar from "../../sidebar/Sidebar";

export const CrudAppPro = () => {
  const [db, setDb] = useState(null);

  //variable de estado cuando sea null va  insertar de lo contrario actualizara
  const [dataToEdit, setDataToEdit] = useState(null);
  // mensaje de error
  const [Error, setError] = useState(null);
  //  cargando
  const [Loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "https://restaurantrestapi.herokuapp.com/api/products";

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

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          setDb([...db, res]);
          //guardando imagenes
          const formdata = new FormData();
          formdata.append("file", data.img);
          let requestOptions = {
            body: formdata,
            method: "POST",
          };
          fetch(
            `https://restaurantrestapi.herokuapp.com/api/products/${res.idProduct}/image`,
            requestOptions
          )
            .then((resp) => resp)
            .then((resp) => console.log(resp))
            .catch((error) => console.log("ERROR NO REGISTRO LA IMAGEN", error));

        } else {
          console.log(res);
          console.log("ERROR NO REGISTRO EL PRODUCTO");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const updateData = (data) => {
    
    let endpoint = `${url}/${data.idProduct}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.patch(endpoint, options)
      .then((res) => {

        if (!res.err) {
          let newData = db.map((el) =>
            el.idProduct === data.idProduct ? data : el
          );
          setDb(newData);

          //ACTUALIZANDO IMAGENES
          const formdata = new FormData();
          formdata.append("file", data.img);
          let requestOptions = {
            body: formdata,
            method: "POST",
          };
          fetch(
            `https://restaurantrestapi.herokuapp.com/api/products/${data.idProduct}/image`,
            requestOptions
          )
            .then((resp) => resp)
            .then((resp) => console.log(resp))
            .catch((error) => console.log("ERROR NO REGISTRO LA IMAGEN", error));

        } else {
          //setError(res);
          console.log("ERROR NO ACTUALIZO")
        }
      });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`Desea eliminar registro ${id} ?"`);
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {

        if (!res.err) {
          let newData = db.filter((el) => el.idProduct !== id);

          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div className="parent">
      <Sidebar />
      {/* {Falta el crud form app} */}
      {Loading && <Loader />}
      {Error && (
        <Message
          msg={`Error ${Error.status}:${Error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      <div className="content">
        <header className="header">
          <div className="header-info">
            <div className="page-info">
              <h2 className="page-name">Settings</h2>
            </div>
          </div>
        </header>
        <main className="settings">
          <div className="col-1">
            <nav className="settings-navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <span className="navbar-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.48311 0.815291C6.2404 0.250031 8.14194 0.45344 9.73299 1.35623L9.99639 1.51429L10.2645 1.35535C11.773 0.501301 13.5624 0.273087 15.2463 0.736231L15.512 0.81535C19.1847 1.9978 20.8291 6.00801 19.5937 9.84516C18.9743 11.6301 17.9584 13.2485 16.6174 14.5824C14.7927 16.3545 12.7812 17.9194 10.6218 19.2473L10.3926 19.3897C10.1598 19.5344 9.86561 19.5369 9.63044 19.3961L9.38488 19.2491C7.22254 17.9194 5.21101 16.3545 3.38004 14.5762C2.04534 13.2485 1.02947 11.6301 0.40482 9.82952C-0.826136 6.00569 0.811517 1.99738 4.48311 0.815291ZM9.37465 2.85427C8.07056 1.96289 6.43331 1.72339 4.93153 2.20646C2.08746 3.12212 0.798077 6.27801 1.79207 9.36635C2.33877 10.9417 3.23505 12.3696 4.40582 13.5343C6.15375 15.2319 8.08049 16.7308 10.144 17.9998L10.0013 17.9098L10.4691 17.6156C12.1026 16.561 13.641 15.3642 15.0636 14.0421L15.5916 13.5405C16.7687 12.3696 17.665 10.9417 18.2064 9.38199C19.2047 6.28096 17.9097 3.12284 15.0641 2.20669C13.4873 1.70082 11.766 1.99057 10.436 2.98625C10.1806 3.17742 9.83072 3.18111 9.57138 2.99538L9.37465 2.85427ZM13.8703 4.48374C15.1917 4.90551 16.1288 6.08859 16.2457 7.47853C16.2796 7.8807 15.9807 8.23413 15.5782 8.26794C15.1757 8.30175 14.822 8.00313 14.7881 7.60096C14.7206 6.79803 14.1814 6.11735 13.4252 5.87597C13.0404 5.75316 12.8281 5.34194 12.951 4.95749C13.0739 4.57304 13.4855 4.36093 13.8703 4.48374Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <div className="navbar-content">
                    <span className="name-item">Appereance</span>
                    <span className="desc-item">Config Appereance</span>
                  </div>
                </li>
                <li className="navbar-item">
                  <span className="navbar-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3415 19.2089C20.7052 19.2089 21 19.498 21 19.8545C21 20.1813 20.7523 20.4514 20.4308 20.4941L20.3415 20.5H13.471C13.1073 20.5 12.8125 20.211 12.8125 19.8545C12.8125 19.5277 13.0602 19.2576 13.3816 19.2148L13.471 19.2089H20.3415ZM13.6592 4.41662C14.906 3.19446 16.9283 3.19446 18.175 4.41662L19.4694 5.6854C20.7162 6.90755 20.7162 8.88985 19.4694 10.112L9.74061 19.6486C9.1843 20.1939 8.43007 20.4999 7.64282 20.4999H3.65854C3.28841 20.4999 2.99098 20.201 3.00021 19.8383L3.10043 15.8975C3.12036 15.1526 3.43127 14.4425 3.96867 13.9157L13.6592 4.41662ZM12.906 6.979L4.89998 14.8287C4.60126 15.1215 4.42814 15.5169 4.41707 15.9305L4.33345 19.2084L7.64282 19.2088C8.03222 19.2088 8.4067 19.0745 8.70228 18.8317L8.8093 18.7357L16.855 10.849L12.906 6.979ZM17.2437 5.32953C16.5113 4.61156 15.323 4.61156 14.5905 5.32953L13.838 6.066L17.786 9.936L18.5381 9.19909C19.2298 8.52101 19.2683 7.44433 18.6534 6.72195L18.5381 6.59831L17.2437 5.32953Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <div className="navbar-content">
                    <span className="name-item">Appereance</span>
                    <span className="desc-item">Config Appereance</span>
                  </div>
                </li>
                <li className="navbar-item">
                  <span className="navbar-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <div className="navbar-content">
                    <span className="name-item">Appereance</span>
                    <span className="desc-item">Config Appereance</span>
                  </div>
                </li>
                <li className="navbar-item">
                  <span className="navbar-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.48311 0.815291C6.2404 0.250031 8.14194 0.45344 9.73299 1.35623L9.99639 1.51429L10.2645 1.35535C11.773 0.501301 13.5624 0.273087 15.2463 0.736231L15.512 0.81535C19.1847 1.9978 20.8291 6.00801 19.5937 9.84516C18.9743 11.6301 17.9584 13.2485 16.6174 14.5824C14.7927 16.3545 12.7812 17.9194 10.6218 19.2473L10.3926 19.3897C10.1598 19.5344 9.86561 19.5369 9.63044 19.3961L9.38488 19.2491C7.22254 17.9194 5.21101 16.3545 3.38004 14.5762C2.04534 13.2485 1.02947 11.6301 0.40482 9.82952C-0.826136 6.00569 0.811517 1.99738 4.48311 0.815291ZM9.37465 2.85427C8.07056 1.96289 6.43331 1.72339 4.93153 2.20646C2.08746 3.12212 0.798077 6.27801 1.79207 9.36635C2.33877 10.9417 3.23505 12.3696 4.40582 13.5343C6.15375 15.2319 8.08049 16.7308 10.144 17.9998L10.0013 17.9098L10.4691 17.6156C12.1026 16.561 13.641 15.3642 15.0636 14.0421L15.5916 13.5405C16.7687 12.3696 17.665 10.9417 18.2064 9.38199C19.2047 6.28096 17.9097 3.12284 15.0641 2.20669C13.4873 1.70082 11.766 1.99057 10.436 2.98625C10.1806 3.17742 9.83072 3.18111 9.57138 2.99538L9.37465 2.85427ZM13.8703 4.48374C15.1917 4.90551 16.1288 6.08859 16.2457 7.47853C16.2796 7.8807 15.9807 8.23413 15.5782 8.26794C15.1757 8.30175 14.822 8.00313 14.7881 7.60096C14.7206 6.79803 14.1814 6.11735 13.4252 5.87597C13.0404 5.75316 12.8281 5.34194 12.951 4.95749C13.0739 4.57304 13.4855 4.36093 13.8703 4.48374Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <div className="navbar-content">
                    <span className="name-item">Appereance</span>
                    <span className="desc-item">Config Appereance</span>
                  </div>
                </li>
                <li className="navbar-item">
                  <span className="navbar-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3415 19.2089C20.7052 19.2089 21 19.498 21 19.8545C21 20.1813 20.7523 20.4514 20.4308 20.4941L20.3415 20.5H13.471C13.1073 20.5 12.8125 20.211 12.8125 19.8545C12.8125 19.5277 13.0602 19.2576 13.3816 19.2148L13.471 19.2089H20.3415ZM13.6592 4.41662C14.906 3.19446 16.9283 3.19446 18.175 4.41662L19.4694 5.6854C20.7162 6.90755 20.7162 8.88985 19.4694 10.112L9.74061 19.6486C9.1843 20.1939 8.43007 20.4999 7.64282 20.4999H3.65854C3.28841 20.4999 2.99098 20.201 3.00021 19.8383L3.10043 15.8975C3.12036 15.1526 3.43127 14.4425 3.96867 13.9157L13.6592 4.41662ZM12.906 6.979L4.89998 14.8287C4.60126 15.1215 4.42814 15.5169 4.41707 15.9305L4.33345 19.2084L7.64282 19.2088C8.03222 19.2088 8.4067 19.0745 8.70228 18.8317L8.8093 18.7357L16.855 10.849L12.906 6.979ZM17.2437 5.32953C16.5113 4.61156 15.323 4.61156 14.5905 5.32953L13.838 6.066L17.786 9.936L18.5381 9.19909C19.2298 8.52101 19.2683 7.44433 18.6534 6.72195L18.5381 6.59831L17.2437 5.32953Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <div className="navbar-content">
                    <span className="name-item">Appereance</span>
                    <span className="desc-item">Config Appereance</span>
                  </div>
                </li>
                <li className="navbar-item">
                  <span className="navbar-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z" fill="#3B5162" />
                    </svg>
                  </span>
                  <div className="navbar-content">
                    <span className="name-item">Appereance</span>
                    <span className="desc-item">Config Appereance</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          {db && (
            <CrudTablePro
              data={db}
              //funcion para actualizar laa  nueva renderizacion sin el elemento renderizado
              setDataToEdit={setDataToEdit}
              //pasamos el deletedata para eliminar un id
              deleteData={deleteData}
              createData={createData}
              updateData={updateData}
              //para diferenciar entre create y update necesitamos pasarle la variable de estado y la funcion que actualiza datatoedit
              dataToEdit={dataToEdit}
            />
          )}
        </main>
      </div>
    </div>
  );
};
