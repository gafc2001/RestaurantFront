import React, { useState } from "react";
import { URL } from "../../api/apiDB";
import { helpHttp } from "../helpers/helpHttp";
const initialForm = {
  oldPassword: "",
  newPassword: "",
  passwordConfirmation: "",
};
const idcli = sessionStorage.getItem("id");
const ChangePassword = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    helpHttp()
      .post(`${URL.PASSWORD_CHANGE}/${idcli}/password`, {
        body: form,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <form className="profile-details section" onSubmit={handleSubmit}>
      <div className="form-group">
        <h4>Ingrese su contraseña </h4>
        <div className="input-container">
          <div className="profile-icon center">
            <i className="fas fa-user"></i>
          </div>
          <input
            type="password"
            name="oldPassword"
            className="input"
            placeholder="Su contraseña"
            onChange={handleChange}
            value={form.oldPassword}
            required
            autoComplete="off"
          ></input>
        </div>
      </div>

      <div className="form-group">
        <h4>Ingresa su nueva contraseña</h4>
        <div className="input-container">
          <div className="profile-icon center">
            <i className="fas fa-user"></i>
          </div>
          <input
            type="password"
            name="newPassword"
            className="input"
            placeholder="Su nueva contraseña"
            onChange={handleChange}
            value={form.newPassword}
            required
            autoComplete="off"
          ></input>
        </div>
      </div>
      <div className="form-group">
        <h4>Confirme su contraseña</h4>
        <div className="input-container">
          <div className="profile-icon center">
            <i className="fas fa-user"></i>
          </div>
          <input
            type="password"
            name="passwordConfirmation"
            className="input"
            placeholder="repita su nueva contraseña"
            onChange={handleChange}
            value={form.passwordConfirmation}
            required
            autoComplete="off"
          ></input>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
        <li className="btn btn-secondary" onClick={() => setForm(initialForm)}>
          cancelar
        </li>
      </div>
    </form>
  );
};

export default ChangePassword;
