import React from 'react'
import { URL } from '../../api/apiDB'
const HeaderProfile = () => {
  const idcli = sessionStorage.getItem("id");
    return (
        <header className="profile-header">
        <div className="profile-image-container">
          <img src={`${URL.USERS_DB}/${idcli}/image`} />
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
    )
}

export default HeaderProfile
