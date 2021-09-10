import md5 from "md5";
import { useState, useEffect } from "react";
import Header from "../Header";
import { helpHttp } from "../helpers/helpHttp";

const initialForm = {
  username: "",
  password: "",
  idUser: null,
};

export default function LoginUser() {
  const [form, setform] = useState(initialForm);
  const [db, setDb] = useState(null);
  let api = helpHttp();

  //controlar respuestas del servidor


  const iniciarSesion = (data) => {
    
};
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const  handleSubmit = (e)=>{
    e.preventDefault();
    if(!form.username || !form.password){
        alert("datos incompletos");
        return;
    }else{
      iniciarSesion(form);
    }
};

  return (
    <div>
      <h4>este es el Login </h4>
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
      <label>Contraseña: </label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={form.password}
      ></input>
      <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}


// const url = "https://restaurantrestapi.herokuapp.com/api/auth/signin";
// let data = {
//     "username" : "moderator",
//     "password" : "12345678"
// };
// (async () => {
//     const rawResponse = await fetch("http://localhost:8080/api/auth/signin", {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     const content = await rawResponse.json();

//     console.log(content);
// })();