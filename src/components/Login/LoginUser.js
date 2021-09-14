import { useState} from "react";
import delicius from '../../assets/images/delicius.jpg'
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Message } from "../crud/Message";

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
    <>
    {user && <Redirect to="/home" />}
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
                            <input value={form.user} type="text" id="username" name="username" placeholder="Your username" class="input" onChange={handleChange}/>
                        </div>
                       
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-container">
                            <i class="fas fa-lock"></i>
                            <input value={form.password} type="password" id="password"  name="password" placeholder="Your password" class="input" onChange={handleChange}/>
                        </div>
                        {Error &&( (<Message msg={"Contrasena incorrecta o usuario"} 
            bgColor="#dc3545"/>))}
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