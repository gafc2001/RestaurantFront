import { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import { Redirect } from "react-router";


//Components
import SideBar from "./../sidebar/Sidebar"

//Styles
import "./../../assets/css/form.css";
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
      <img src={backgroundImg} alt="" className="background"/>
      <SideBar/>
        <div className="content center">
            <div className="content-form">
                <div className="form-logo">
                    <img src={logoWhite} alt=""/>
                </div>
                <form onSubmit={handleSubmit}>  
                    <div className="form-group">
                        <label for="username">Username</label>
                        <div className="input-container">
                            <i className="fas fa-user-circle"></i>
                            <input type="text" id="username" name="username" placeholder="Your username" className="input" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <div className="input-container">
                            <i className="fas fa-envelope"></i>
                            <input type="email" id="email"  name="email" placeholder="Your email" className="input" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <div className="input-container">
                            <i className="fas fa-lock"></i>
                            <input type="password" id="password"  name="password" placeholder="Your password" className="input" onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </>
  );
}
