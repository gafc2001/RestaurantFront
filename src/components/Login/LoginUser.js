import { useState } from "react";

import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Message } from "../Dashboard/Message";

//URL DELYBAKERY
import { URL } from "../../api/apiDB";
//Styles
import "./../../assets/css/form.css";
import "./../../assets/css/style.css";

//Images
import logoWhite from "./../../assets/images/logo-white.png";
import backgroundImg from "../../assets/images/background.jpg";
import Sidebar from "../sidebar/Sidebar";

const initialForm = {
  username: "",
  name: "",
  password: "",
  email: "",
  roles: [],
};

export const LoginUser = () => {
  const [form, setform] = useState(initialForm);
  const [user, setuser] = useState(null);
  const [Error, setError] = useState(false);

  const iniciarSesion = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify(data);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(URL.SIGNIN_AUTH, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        if (result.message === "Bad credentials") {
          setError(true);
        } else {
          sessionStorage.setItem("id", result.id);
          sessionStorage.setItem("email", result.email);
          sessionStorage.setItem("username", result.username);
          sessionStorage.setItem("token", result.accessToken);
          sessionStorage.setItem("role", result.roles);
          setuser(result);
          setError(false);
        }
      })
      .catch((error) => console.log("error ", error));
  };
  const handleChange = async (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      alert("datos incompletos");
      return;
    } else {
      iniciarSesion(form);
    }
  };
  return (
    <>
      {user && <Redirect to="/home" />}
      <Sidebar />
      <img src={backgroundImg} alt="logo" className="background" />
      <div className="content center">
        <div className="content-form">
          <div className="form-logo">
            <img src={logoWhite} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {Error && (
                <Message
                  msg={"Contrasena incorrecta o usuario"}
                  bgColor="#dc3545"
                />
              )}
              <label htmlFor="username">Username</label>
              <div className="input-container">
                <i className="fas fa-user-circle"></i>
                <input
                  value={form.user}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Your username"
                  className="input"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <i className="fas fa-lock"></i>
                <input
                  value={form.password}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  className="input"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Signin
            </button>
            <span className="button-separator">
              {" "}
              <span>or</span>{" "}
            </span>
            <Link to="/register">
              <div className="btn btn-secondary">Register</div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

//moderator contra 12345678
