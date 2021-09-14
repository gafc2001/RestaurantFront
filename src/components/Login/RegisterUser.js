import { useState} from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import delicius from '../../assets/images/delicius.jpg'
import { Redirect } from "react-router";
const initialForm = {
  username:"",
  email:"",
  password:"",
  roles:["mod","user"]
};
const roles =["mod","user"]

export default function RegisterUser() {
  const [form, setform] = useState(initialForm);
// mensaje de error
const [Login,setLogin] = useState(false);


  //controlar respuestas del servidor

  const RegisterUser = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2RlcmF0b3IiLCJpYXQiOjE2MzEzMzc3NTMsImV4cCI6MTYzMTQyNDE1M30.v4Sin4p2Vgaauip9XqMq-DMXYSHqpnkQcUC7i7PNX6YsUjF1IZJUTQCfnAjhUtmDiQPKkVvCVssb0CdxGrdXnA");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://restaurantrestapi.herokuapp.com/api/auth/signup", requestOptions)
      .then(response => response.text())
      .then(result => {
        let user =JSON.parse(result)
          if(user.message=== "User registered successfully!"){
            setLogin(true);

          }else{
              setLogin(false);

          }
      })
      .catch(error => console.log('error', error));
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
        {!Login ?(
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
                    <h1 className="font-weight-bold mb-3 text-light">Crea tu cuenta gratis</h1>
                    <p className="text-muted mb-5">Ingresa la siguiente información para registrarte.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-row mb-2">
                            <div className="form-group col-md-4">
                                <label className="font-weight-bold text-light">Usuario <span className="text-danger">*</span></label>
                                <input type="text" name="username" onChange={handleChange} className="form-control" placeholder="Tu nombre"></input>
                            </div>
                        </div>
                        <div className="form-group mb-3 col-md-6">
                            <label className="font-weight-bold text-light">Correo electrónico <span className="text-danger">*</span></label>
                            <input type="email"  name="email" onChange={handleChange} className="form-control" placeholder="Ingresa tu correo electrónico"></input>
                        </div>
                        <div className="form-group mb-3 col-md-6">
                            <label className="font-weight-bold text-light">Contraseña <span className="text-danger">*</span></label>
                            <input type="password"  name="password" onChange={handleChange}  className="form-control" placeholder="Ingresa una contraseña"></input>
                        </div>
                        <div className="form-group mb-5">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label text-muted">Al seleccionar esta casilla aceptas nuestro aviso de privacidad y los términos y condiciones</label>
                            </div>
                        </div>
                        <button className="btn btn-primary width-100">Regístrate</button>
                    </form>
                    <small className="d-inline-block text-muted mt-5">Todos los derechos reservados | © 2021 Delibakery</small>
                </div>
           </div>
       </div>
   </section>
        ):(<Redirect to="/login"/>)}
    </div>
  );
}
