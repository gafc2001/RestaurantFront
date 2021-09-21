import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardLink = () => {
    return (
        <>
        <NavLink to="/dashboard-products">
        <li className="navbar-item">
            <span className="navbar-icon">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.48311 0.815291C6.2404 0.250031 8.14194 0.45344 9.73299 1.35623L9.99639 1.51429L10.2645 1.35535C11.773 0.501301 13.5624 0.273087 15.2463 0.736231L15.512 0.81535C19.1847 1.9978 20.8291 6.00801 19.5937 9.84516C18.9743 11.6301 17.9584 13.2485 16.6174 14.5824C14.7927 16.3545 12.7812 17.9194 10.6218 19.2473L10.3926 19.3897C10.1598 19.5344 9.86561 19.5369 9.63044 19.3961L9.38488 19.2491C7.22254 17.9194 5.21101 16.3545 3.38004 14.5762C2.04534 13.2485 1.02947 11.6301 0.40482 9.82952C-0.826136 6.00569 0.811517 1.99738 4.48311 0.815291ZM9.37465 2.85427C8.07056 1.96289 6.43331 1.72339 4.93153 2.20646C2.08746 3.12212 0.798077 6.27801 1.79207 9.36635C2.33877 10.9417 3.23505 12.3696 4.40582 13.5343C6.15375 15.2319 8.08049 16.7308 10.144 17.9998L10.0013 17.9098L10.4691 17.6156C12.1026 16.561 13.641 15.3642 15.0636 14.0421L15.5916 13.5405C16.7687 12.3696 17.665 10.9417 18.2064 9.38199C19.2047 6.28096 17.9097 3.12284 15.0641 2.20669C13.4873 1.70082 11.766 1.99057 10.436 2.98625C10.1806 3.17742 9.83072 3.18111 9.57138 2.99538L9.37465 2.85427ZM13.8703 4.48374C15.1917 4.90551 16.1288 6.08859 16.2457 7.47853C16.2796 7.8807 15.9807 8.23413 15.5782 8.26794C15.1757 8.30175 14.822 8.00313 14.7881 7.60096C14.7206 6.79803 14.1814 6.11735 13.4252 5.87597C13.0404 5.75316 12.8281 5.34194 12.951 4.95749C13.0739 4.57304 13.4855 4.36093 13.8703 4.48374Z"
                        fill="#3B5162"
                    />
                </svg>
            </span>
            <div className="navbar-content">
                <span className="name-item">Crud products</span>
                <span className="desc-item">Config Appereance</span>
            </div>
        </li>
        </NavLink>
        <NavLink to="/dashboard-categories">
        <li className="navbar-item">
            <span className="navbar-icon">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.48311 0.815291C6.2404 0.250031 8.14194 0.45344 9.73299 1.35623L9.99639 1.51429L10.2645 1.35535C11.773 0.501301 13.5624 0.273087 15.2463 0.736231L15.512 0.81535C19.1847 1.9978 20.8291 6.00801 19.5937 9.84516C18.9743 11.6301 17.9584 13.2485 16.6174 14.5824C14.7927 16.3545 12.7812 17.9194 10.6218 19.2473L10.3926 19.3897C10.1598 19.5344 9.86561 19.5369 9.63044 19.3961L9.38488 19.2491C7.22254 17.9194 5.21101 16.3545 3.38004 14.5762C2.04534 13.2485 1.02947 11.6301 0.40482 9.82952C-0.826136 6.00569 0.811517 1.99738 4.48311 0.815291ZM9.37465 2.85427C8.07056 1.96289 6.43331 1.72339 4.93153 2.20646C2.08746 3.12212 0.798077 6.27801 1.79207 9.36635C2.33877 10.9417 3.23505 12.3696 4.40582 13.5343C6.15375 15.2319 8.08049 16.7308 10.144 17.9998L10.0013 17.9098L10.4691 17.6156C12.1026 16.561 13.641 15.3642 15.0636 14.0421L15.5916 13.5405C16.7687 12.3696 17.665 10.9417 18.2064 9.38199C19.2047 6.28096 17.9097 3.12284 15.0641 2.20669C13.4873 1.70082 11.766 1.99057 10.436 2.98625C10.1806 3.17742 9.83072 3.18111 9.57138 2.99538L9.37465 2.85427ZM13.8703 4.48374C15.1917 4.90551 16.1288 6.08859 16.2457 7.47853C16.2796 7.8807 15.9807 8.23413 15.5782 8.26794C15.1757 8.30175 14.822 8.00313 14.7881 7.60096C14.7206 6.79803 14.1814 6.11735 13.4252 5.87597C13.0404 5.75316 12.8281 5.34194 12.951 4.95749C13.0739 4.57304 13.4855 4.36093 13.8703 4.48374Z"
                        fill="#3B5162"
                    />
                </svg>
            </span>
            <div className="navbar-content">
                <span className="name-item">Crud categories</span>
                <span className="desc-item">Config Appereance</span>
            </div>
        </li>
        </NavLink>
        </>
    )
}
export { DashboardLink };