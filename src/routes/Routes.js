import React from "react";

import { PublicRoute } from "./helperRoutes";
import { Switch,Redirect,Route } from 'react-router-dom';
import { LoginUser } from "../components/Login/LoginUser";
import { RegisterUser } from "../components/Login/RegisterUser";

import { PrivateRoute } from './helperRoutes';
import { Dashboard } from '../components/Dashboard/Dashboard';
import Error from '../components/Error';
import { Products } from '../components/home/Products';
import Message from '../components/Message';
import { Notify } from '../components/Notify';
import { isAuthenticated } from "../auth/authentications";
import HomeView from "../components/homeview/HomeView"

const Routes = () => {
    const isAuth = isAuthenticated();
  return (
    <>
    
    <Switch>
    
      <PublicRoute exact path="/" component={HomeView} />
      <PublicRoute exact path="/login" component={LoginUser} />
      <PublicRoute exact path="/register" component={RegisterUser} />
      <PrivateRoute exact path="/home" component={Products} />
      <PrivateRoute exact path="/notifications" component={Notify} />
      <PrivateRoute exact path="/message" component={Message} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/404" component={Error} />
      <Route
        exact
        path="*"
        render={() => {
          return <Redirect to={isAuth ?'/home':'/login'} />;
        }}
      />
    </Switch>
    </>
  );
};

export default Routes;
