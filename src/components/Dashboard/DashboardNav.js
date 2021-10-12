import React from "react";
import { Link } from "react-router-dom";
import { useRouteMatch} from "react-router";


const DashboardNav = () => {
    let { url } = useRouteMatch();
  return (
    <>
      <nav className="settings-navbar">
        <ul className="navbar-list">
          <Link to="/maindashboard/dashboard/products">
            <li className="navbar-item">
              <span className="navbar-icon">
                <i class="fas fa-box-open"></i>
              </span>
              <div className="navbar-content">
                <span className="name-item">Editar productos</span>
                <span className="desc-item">Configuración de Productos</span>
              </div>
            </li>
          </Link>
          <Link to="/maindashboard/dashboard/categories">
            <li className="navbar-item">
              <span className="navbar-icon">
                <i class="fas fa-tags"></i>
              </span>
              <div className="navbar-content">
                <span className="name-item">Editar categories</span>
                <span className="desc-item">Configuración de Categorias</span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export { DashboardNav };
