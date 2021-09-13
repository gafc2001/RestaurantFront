import React, { Component } from 'react';
import db from '../assets/images/db.png';
import { NavLink } from 'react-router-dom';
export default function Header()
{
    return (
            <header>
                <div className="menu__side" id="menu_side">
                    <div className="name__page">
                        <img src={db} className="app-logo" alt="logotipo" />
                    </div>

                    <div className="options__menu">

                        <NavLink to="/home" className="selected">
                            <div className="option">
                                <i className="fas fa-home" title="Home"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/login">
                            <div className="option">
                                <i className="far fa-id-badge" title="Login"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/message">
                            <div className="option">
                                <i className="fas fa-envelope-square" title="Message"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/notifications">
                            <div className="option">
                                <i className="fas fa-flag" title="Notify"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/settings">
                            <div className="option">
                                <i className="fas fa-wrench" title="Config"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/exit">
                            <div className="option">
                                <i className="fas fa-sign-out-alt" title="Exit"></i>
                            </div>
                        </NavLink>

                    </div>

                </div>
            </header>
        );
}
