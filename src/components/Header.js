import React, { Component } from 'react';
import db from '../assets/images/db.png';
import { NavLink } from 'react-router-dom';
export default function Header()
{
    return (
            <header className="body">
                <div className="icon__menu">
                    <i  className="fas fa-bars" id="btn_open"></i>
                </div>
                <div className="menu__side" id="menu_side">
                    <div className="name__page">
                        <img src={db} className="app-logo" alt="logotipo" />
                        <h4>Delibakery</h4>
                    </div>

                    <div className="options__menu">

                        <NavLink to="/home" className="selected">
                            <div className="option">
                                <i className="fas fa-home" title="Home"></i>
                                <h4>Home</h4>
                            </div>
                        </NavLink>

                        <NavLink to="/login">
                            <div className="option">
                                <i className="far fa-id-badge" title="Login"></i>
                                <h4>Login</h4>
                            </div>
                        </NavLink>

                        <NavLink to="/message">
                            <div className="option">
                                <i className="fas fa-envelope-square" title="Message"></i>
                                <h4>Message</h4>
                            </div>
                        </NavLink>

                        <NavLink to="/notifications">
                            <div className="option">
                                <i className="fas fa-flag" title="Notify"></i>
                                <h4>Notify</h4>
                            </div>
                        </NavLink>

                        <NavLink to="/settings">
                            <div className="option">
                                <i className="fas fa-wrench" title="Config"></i>
                                <h4>configure</h4>
                            </div>
                        </NavLink>

                        <NavLink to="/exit">
                            <div className="option">
                                <i className="fas fa-sign-out-alt" title="Exit"></i>
                                <h4>exit</h4>
                            </div>
                        </NavLink>

                    </div>

                </div>
            </header>
        );
}
