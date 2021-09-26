import React from "react";
import { useParams } from "react-router";
import { CrudCategory } from "./Category/CrudCategory";
import { CrudAppPro } from "./Product/CrudAppPro";
//import { propTypes } from 'react-bootstrap/esm/Image';
//import { DashboardLink } from './DashboardLink';

const DashboardContainer = () => {
  let { topic } = useParams();
  return (
    <>
      ({topic === "categories" && <CrudCategory />}
      {topic === "products" && <CrudAppPro />})
    </>
  );
};
export { DashboardContainer };
