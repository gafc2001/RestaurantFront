import React from "react";
import { useRouteMatch,Switch,Route } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardNav } from "./DashboardNav";
import { DashboardContainer } from "./DashboardContainer";
const Dashboard = () => {
  return (
    <>
    <Sidebar/>
      <div className="parent">
        <div className="content">
          <header className="header">
            <div className="header-info">
              <div className="page-info">
                <h2 className="page-name">Configuraciones</h2>
              </div>
            </div>
          </header>
          <main className="settings">
            <div className="col-1">
              <DashboardNav/>
            </div>
            <div className="col-2">
              <DashboardHeader/>
              <div className="setting-content">
                <DashboardContainer/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export { Dashboard };
