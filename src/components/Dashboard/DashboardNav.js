import { DashboardLink } from "./DashboardLink";
import React from 'react';

const DashboardNav = () => {
    return(
    <div className="col-1">
        <nav className="settings-navbar">
            <ul className="navbar-list">
                <DashboardLink/>
            </ul>
        </nav>
    </div>
    )
}
export {DashboardNav};