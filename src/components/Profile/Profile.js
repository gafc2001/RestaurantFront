import React from "react";

import Sidebar from "../sidebar/Sidebar";
import ProfileFormUser from "./ProfileFormUser";
import HeaderProfile from "./HeaderProfile";

import "./profile.css";
const Profile = () => {

  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="profile-content container">
          <HeaderProfile />
          <nav className="profile-options section">
            <ul className="btn-container">
              <li className="btn btn-primary">Perfil</li>
              <li className="btn btn-secondary">Cambiar contraseña</li>
              <li></li>
            </ul>
          </nav>
          <ProfileFormUser/>
        </div>
      </div>
    </>
  );
};
export { Profile };
