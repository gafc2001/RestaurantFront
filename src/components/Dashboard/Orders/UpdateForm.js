import React from "react";
import { useState, useEffect } from "react";
import "moment/locale/es-mx";
import Moment from "react-moment";
const initialForm = {
  idOrder: null,
  statusOrder: "",
};

const UpdateForm = ({ updateOrder, dataToEdit }) => {
  const [form, setform] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setform(dataToEdit);
    } else {
      setform(initialForm);
    }
  }, [dataToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.statusOrder || !form.idOrder) {
      alert("datos incompletos");
      return;
    }
    switch (form.statusOrder) {
      case "PENDIENTE":
        setform({
          ...form,
          statusOrder: "PREPARANDO",
        });
        let status1 = { idOrder: form.idOrder, statusOrder: "PREPARANDO" };
        updateOrder(status1);
        handleReset();
        break;
      case "PREPARANDO":
        setform({
          ...form,
          statusOrder: "ENVIANDO",
        });
        let status2 = { idOrder: form.idOrder, statusOrder: "ENVIANDO" };
        updateOrder(status2);
        handleReset();
        break;
      case "ENVIANDO":
        setform({
          ...form,
          statusOrder: "COMPLETADO",
        });
        let status3 = { idOrder: form.idOrder, statusOrder: "COMPLETADO" };
        updateOrder(status3);
        handleReset();
        break;
      case "COMPLETADO":
        alert("Este pedido a sido finalizado");
        handleReset();
        break;
      default:
        console.log("El estado no se encuentra");
        break;
    }
  };

  const handleReset = (e) => {
    setform(initialForm);
  };
  return (
    <div className="content-form">
      <form onSubmit={handleSubmit}>
        {form.idOrder ? (
          <div className="form-group">
            <label htmlFor="idOrder">NUMERO DE ORDEN: {form.idOrder}</label>
            <label htmlFor="client">CLIENTE: {form.user.username}</label>
            <label htmlFor="statusOrder">
              ESTADO DEL PEDIDO: {form.statusOrder}
            </label>
            <label htmlFor="date">
              FECHA DE CREACION: <Moment format="LL">{form.createdAt}</Moment>
            </label>
            <label htmlFor="date">
              ULTIMA ACTUALIZACION: <Moment fromNow>{form.updateAt}</Moment>
            </label>
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="idOrder">
              NUMERO DE ORDEN: SELECCIONE UNA ORDEN
            </label>
          </div>
        )}
        <div className="btn-container">
          <button type="submit" className="btn btn-primary">
            FINALIZAR ETAPA
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="btn btn-secondary"
          >
            LIMPIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
