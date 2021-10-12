import React from "react";
import { useParams,useRouteMatch } from "react-router";
import { CrudCategory } from "./Category/CrudCategory";
import { CrudAppPro } from "./Product/CrudAppPro";
//import { propTypes } from 'react-bootstrap/esm/Image';
//import { DashboardLink } from './DashboardLink';
import { Switch, Route } from "react-router-dom";

const DashboardContainer = () => {
  let { topic } = useParams();
  console.log(topic)
  return (
    <>
      {!topic && <CrudAppPro />}
      <Switch>
        {topic==="products" && <Route path="/maindashboard/dashboard/products" component={CrudAppPro}/>}
        {topic==="categories" && <Route Route path="/maindashboard/dashboard/categories"  component={CrudCategory}/>}
      </Switch>
    </>
  );
};
export { DashboardContainer };
