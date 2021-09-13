import { useState} from "react";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css"
import delicius from '../../assets/images/delicius.jpg'
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Message } from "../crud/Message";

const initialForm = {
  username: "",
  name: "",
  password: "",
  email:"",
  roles:[]
};

export default function LoginUser() {
  const [form, setform] = useState(initialForm);
  const baseUrl = "https://restaurantrestapi.herokuapp.com/api/auth/signin";
  const [user,setuser] = useState(null);
  const [Error,setError] = useState(false);
  

  const iniciarSesion =(data)=> {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch(baseUrl, requestOptions)
      .then(response => response.json())
      .then(result => { 
        console.log(result);
        if(result.message === 'Bad credentials'){
          setError(true)
          
        }else{
          localStorage.setItem("id",result.id);
          localStorage.setItem("username",result.username);
          localStorage.setItem("email",result.email);
          localStorage.setItem("token",result.token);
          localStorage.setItem("tokenType",result.tokenType);
          setuser(result)
          setError(false)
          // if(user.roles[0]==='ROLE_USER'){
          //   window.location = '/home'

          // }else{
          //   window.location = '/settings'
          // }
          
        }
      }
        )
      .catch(error => console.log('error ',error))
};
  const handleChange =async (e) => {
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
      <Header/>
      {!user ?
       <section className="contact-box">
       <div className="row no-gutters bg-dark">
           <div className="col-xl-5 col-lg-12 register-bg" style={{ backgroundImage: `url(${delicius})` }} >             
            <div className="position-absolute testiomonial p-4">
                <h3 className="font-weight-bold text-light">Los más deliciosos platos.</h3>
                <p className="lead text-light">Tu paladar se aproxima al éxtasis.</p>
            </div>
           </div>
           <div className="col-xl-7 col-lg-12 d-flex">
                <div className="container align-self-center p-6">
                    <h1 className="font-weight-bold mb-3 text-light">Inicia sesion</h1>
                    <p className="text-muted mb-5">Ingresa la siguiente información para iniciar Sesion.</p>
                    {Error &&( (<Message msg={"Contrasena incorrecta o usuario"} 
            bgColor="#dc3545"/>))}

                    <form onSubmit={handleSubmit}>
                        <div className="form-row mb-2">
                            <div className="form-group col-md-4">
                                <label className="font-weight-bold text-light">Usuario <span className="text-danger">*</span></label>
                                <input type="text"   name="username" onChange={handleChange} className="form-control" placeholder="Tu usuario" value={form.username}></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label className="font-weight-bold text-light">Contrasena <span className="text-danger">*</span></label>
                                <input type="password"  name="password" onChange={handleChange} className="form-control" placeholder="Tu contraseña" value={form.password}></input>
                            </div>
                        </div>
          
                        <button className="btn btn-primary width-100 ">Inicia Sesion</button>
                        <Link className="btn btn-primary width-100 mx-2" to="/register">Registrar</Link>

                    </form>
                    <small className="d-inline-block text-muted mt-5">Todos los derechos reservados | © 2021 Delibakery</small>
                </div>
           </div>
       </div>
   </section>
:(<Redirect to="/home"/>)}
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