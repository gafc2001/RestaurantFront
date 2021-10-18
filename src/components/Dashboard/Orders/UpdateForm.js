import React from "react";
import { useState, useEffect } from "react";

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

  const selectChange = (e) => {
    setform({
      ...form,
      statusOrder: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.statusOrder || !form.idOrder) {
      alert("datos incompletos");
      return;
    }
    updateOrder(form);
    handleReset();
  };

  const handleReset = (e) => {
    setform(initialForm);
  };
  return (
    <div className="content-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="EstatusOrder">Estado de la orden</label>
          <select className="select-form" onChange={selectChange}>
          <option selected disabled >Cambiar el estado de la orden</option>
          <option  value="PENDIENTE">Pago Efectuado</option>
            <option value="PREPARANDO">Preparando Orden</option>
            <option value="ENVIANDO">Orden Lista para enviar </option>
            <option value="COMPLETADO">Orden Completada</option>
          </select>
        </div>
        <div className="btn-container">
          <button type="submit" className="btn btn-primary">
            CAMBIAR ESTADO
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="btn btn-secondary"
          >
            CANCELAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
