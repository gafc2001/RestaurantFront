import React from "react";
import { useRouteMatch,Switch,Route } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import { DashboardContainer } from "./DashboardContainer";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardNav } from "./DashboardNav";
const Dashboard = () => {
//  let {topic}=useParams();
  let { path} = useRouteMatch();
  return (
    <>
    <Sidebar/>
      <div className="parent">
        <div className="content">
          <header className="header">
            <div className="header-info">
              <div className="page-info">
                <h2 className="page-name">Settings</h2>
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
                <Switch>
                    <Route path={`${path}/:topic`} component={DashboardContainer}/>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export { Dashboard };
