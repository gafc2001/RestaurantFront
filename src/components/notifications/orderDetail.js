import React, { useRef, useState } from "react";

import Sidebar from "../sidebar/Sidebar";
import "./../../assets/css/notification.css";

export const  OrderDetails = () => {
     

    return (
        <>
            <Sidebar />
            <div className="parent">
                <div className="content">
                    <header className="header">
                        <div className="header-info">
                            <div className="page-info">
                                <h2 className="page-name">Details</h2>
                            </div>
                        </div>
                    </header>
                    <div className="col-1 box-content">
                        <div className="noti-container">
                            <div className="noti-header">
                                <h2 className="noti-title border-b">Order #<span></span></h2>
                            </div>
                            <div className="product-container">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <td>Product</td>
                                            <td>Price</td>
                                            <td>Quantity</td>
                                            <td>Total</td>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <td className="card-image product-cell" colSpan="2">
                                                <img src={"https://restaurantrestapi.herokuapp.com/api/products/5/image"}/>
                                                <span>Product 1</span>
                                            </td>
                                            <td>$ 10.00</td>
                                            <td>5</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td className="card-image product-cell" colSpan="2">
                                                <img src={"https://restaurantrestapi.herokuapp.com/api/products/15/image"}/>
                                                <span>Product 1</span>
                                            </td>
                                            <td>$ 10.00</td>
                                            <td>5</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td className="card-image product-cell" colSpan="2">
                                                <img src={"https://restaurantrestapi.herokuapp.com/api/products/25/image"}/>
                                                <span>Product 1</span>
                                            </td>
                                            <td>$ 10.00</td>
                                            <td>5</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td className="card-image product-cell" colSpan="2">
                                                <img src={"https://restaurantrestapi.herokuapp.com/api/products/35/image"}/>
                                                <span>Product 1</span>
                                            </td>
                                            <td>$ 10.00</td>
                                            <td>5</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td className="card-image product-cell" colSpan="2">
                                                <img src={"https://restaurantrestapi.herokuapp.com/api/products/5/image"}/>
                                                <span>Product 1</span>
                                            </td>
                                            <td>$ 10.00</td>
                                            <td>5</td>
                                            <td>50</td>
                                        </tr>
                                        <tr>
                                            <td className="card-image product-cell" colSpan="2">
                                                <img src={"https://restaurantrestapi.herokuapp.com/api/products/5/image"}/>
                                                <span>Product 1</span>
                                            </td>
                                            <td>$ 10.00</td>
                                            <td>5</td>
                                            <td>50</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
