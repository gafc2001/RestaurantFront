import { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import delicius from '../../assets/images/delicius.jpg'
import { Redirect } from "react-router";


//Components
import SideBar from "./../sidebar/Sidebar"

//Styles
import "./form.css";
import "./../../assets/css/style.css";

//Images
import logoWhite from "./../../assets/images/logo-white.png";
import backgroundImg from '../../assets/images/background.jpg';


const initialForm = {
  username: "",
  email: "",
  password: "",
  roles: ["mod", "user"]
};
const roles = ["mod", "user"]

export default function RegisterUser() {
  const [form, setform] = useState(initialForm);
  // mensaje de error
  const [Login, setLogin] = useState(false);


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
        let user = JSON.parse(result)
        if (user.message === "User registered successfully!") {
          setLogin(true);

        } else {
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

    
    <>
    {Login && <Redirect to="/login" />}
      <img src={backgroundImg} alt="" class="background"/>
      <SideBar/>
        <div class="content center">
            <div class="content-form">
                <div class="form-logo">
                    <img src={logoWhite} alt=""/>
                </div>
                <form onSubmit={handleSubmit}>  
                    <div class="form-group">
                        <label for="username">Username</label>
                        <div class="input-container">
                            <i class="fas fa-user-circle"></i>
                            <input type="text" id="username" name="username" placeholder="Your username" class="input" onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="input-container">
                            <i class="fas fa-envelope"></i>
                            <input type="email" id="email"  name="email" placeholder="Your email" class="input" onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-container">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="password"  name="password" placeholder="Your password" class="input" onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="rpt-password">Repeat Password</label>
                        <div class="input-container">
                            <i class="fas fa-lock"></i>
                            <input type="password" id="rpt-password" placeholder="Repeat password" class="input"/>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </>
  );
}
