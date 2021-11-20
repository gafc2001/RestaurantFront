import React from 'react';

import Sidebar from "../sidebar/Sidebar";

import "./profile.css";
const Profile = () => {

    return (
        <>
        <Sidebar/>
        <div className="content">
            <div className="profile-content container">
                <header className="profile-header">
                    <div className="profile-image-container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"/>
                    </div>
                    <div className="profile-summary">
                        <ul className="profile-summary-list">
                            <li className="profile-summary-item">
                                <span className="summary-value">20</span>
                                <span className="summary-display">Total Ordenes</span>
                            </li>
                            <li className="profile-summary-item">
                                <span className="summary-value">$ 330.52</span>
                                <span className="summary-display">Total de gastos</span>
                            </li>
                        </ul>
                    </div>
                </header>
                <nav className="profile-options section">
                    <ul className="btn-container">
                        <li className="btn btn-primary">Perfil</li>
                        <li className="btn btn-secondary">Pedidos</li>
                        <li></li>
                    </ul>
                </nav>
                <main className="profile-details section">
                    <div className="profile-item mb-1">
                        <div className="profile-icon center">
                            <i class="fas fa-user"></i>
                        </div>
                        <div className="profile-detail">
                            <h4>Nombre</h4>
                            <span className="profile-value">Marck Zuckerberg</span>
                        </div>
                    </div>
                    <div className="profile-item mb-1">
                        <div className="profile-icon center">
                            <i class="fas fa-address-card"></i>
                        </div>
                        <div className="profile-detail">
                            <h4>Dni</h4>
                            <span className="profile-value">77123723</span>
                        </div>
                    </div>
                    <div className="profile-item mb-1">
                        <div className="profile-icon center">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div className="profile-detail">
                            <h4>Telefono</h4>
                            <span className="profile-value">9912376822</span>
                        </div>
                    </div>
                    <div className="profile-item mb-1">
                        <div className="profile-icon center">
                            <i class="fas fa-house-user"></i>
                        </div>
                        <div className="profile-detail">
                            <h4>Direccion</h4>
                            <span className="profile-value">9912376822</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
    );

};
export {Profile}