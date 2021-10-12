import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch} from "react-router";


const DashboardNav = () => {
    let { url } = useRouteMatch();
  return (
    <>
      <nav className="settings-navbar">
        <ul className="navbar-list">
          <Link to={`${url}/products`}>
            <li className="navbar-item">
              <span className="navbar-icon">
                <i class="fas fa-box-open"></i>
              </span>
              <div className="navbar-content">
                <span className="name-item">Products</span>
                <span className="desc-item">Configure products</span>
              </div>
            </li>
          </Link>
          <Link to={`${url}/categories`}>
            <li className="navbar-item">
              <span className="navbar-icon">
                <i class="fas fa-tags"></i>
              </span>
              <div className="navbar-content">
                <span className="name-item">Product Categories</span>
                <span className="desc-item">Configure the categories</span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export { DashboardNav };
