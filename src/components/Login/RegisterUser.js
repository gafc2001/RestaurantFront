import md5 from "md5";
import { useState, useEffect } from "react";
import Header from "../Header";
import { helpHttp } from "../helpers/helpHttp";


const initialForm = {
  username:"",
  email:"",
  password:"",
};
const roles =["mod","user"]

export default function RegisterUser() {
  const [form, setform] = useState(initialForm);
  const [db, setDb] = useState(null);
  let url = "https://restaurantrestapi.herokuapp.com/api/auth/signup";

  //controlar respuestas del servidor

  const RegisterUser = (data) => {
    console.log(data)
  };
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      RegisterUser(form);
  };

  return (
    <div>
      <h4>este es el Register </h4>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Usuario: </label>
        <input
          type="text"
          name="username"
          placeholder="Ingrese su username"
          onChange={handleChange}
          value={form.username}
        ></input>
        <label>Correo: </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        ></input>
        <label>Contrasena: </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        ></input>
        <label>Rol: </label>
          <input
          type="text"
          name="roles"
          onChange={handleChange}
          value={form.role}
        ></input>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}
