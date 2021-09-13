import React, { useState, useEffect } from "react";
import { CrudFormPro } from "./CrudFormPro";
import CrudTablePro from "./CrudTablePro";
import { helpHttp } from "../../helpers/helpHttp";
import { Message } from "../Message";
import { Loader } from "../Loader";

export const CrudAppPro = () => {
  const [db, setDb] = useState(null);

  //variable de estado cuando sea null va  insertar de lo contrario actualizara
  const [dataToEdit, setDataToEdit] = useState(null);
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
            `https://restaurantrestapi.herokuapp.com/products/${res.idProduct}/image`,
            requestOptions
          )
            .then((resp) => resp)
            .then((resp) => console.log(resp))
            .catch((error) => console.log("ERROR NO REGISTRO LA IMAGEN", error));
          
        } else {
          //setError(res);
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
          `https://restaurantrestapi.herokuapp.com/products/${data.idProduct}/image`,
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
    <div>
      <h2>CRUD App</h2>
      <CrudFormPro
        createData={createData}
        updateData={updateData}
        //para diferenciar entre create y update necesitamos pasarle la variable de estado y la funcion que actualiza datatoedit
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

      {Loading && <Loader />}
      {Error && (
        <Message
          msg={`Error ${Error.status}:${Error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <CrudTablePro
          data={db}
          //funcion para actualizar laa  nueva renderizacion sin el elemento renderizado
          setDataToEdit={setDataToEdit}
          //pasamos el deletedata para eliminar un id
          deleteData={deleteData}
        />
      )}
    </div>
  );
};
