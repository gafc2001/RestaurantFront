import React, { useState, useEffect, useReducer } from "react";
import CrudTablePro from "./CrudTablePro";
import { helpHttp } from "../../helpers/helpHttp";
import { Message } from "../Message";

import {DashboardNav} from './../Dashboard/DashboardNav';
import Sidebar from "../../sidebar/Sidebar";
import { crudInitialState, crudReducer } from "../../../reducers/crudReducer";
import { TYPES } from "../../../acctions/crudAction";

export const CrudAppPro = () => {
  //const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;

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

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });

        if (data.img) {
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
            .catch((error) =>
              console.log("ERROR NO REGISTRO LA IMAGEN", error)
            );
        }
      } else {
        console.log(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.idProduct}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.patch(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });

        if (data.img) {
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
            .catch((error) =>
              console.log("ERROR NO REGISTRO LA IMAGEN", error)
            );
        }
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`Desea eliminar registro ${id}?"`);
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
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
      <div className="content">
        <header className="header">
          <div className="header-info">
            <div className="page-info">
              {Error && (
                <Message
                  msg={"Error al comunicarse con el servidor"}
                  bgColor="#dc3545"
                />
              )}
              <h2 className="page-name">Settings</h2>
            </div>
          </div>
        </header>
        <main className="settings">
          <DashboardNav/>
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
              Loading={Loading}
            />
          )}
        </main>
      </div>
    </div>
  );
};
