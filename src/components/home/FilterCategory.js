import React from 'react';
//import { TYPES } from "../../acctions/shoppingAction";
export const FilterCategory =({data,filtCategory})=>{
    let {nameCategory,idCategory}= data


    return(
        <>
          {/*<li className="category-item category-active">
            <span>All Product</span>
          </li>*/}
          <li className="filter-item " onClick={() =>filtCategory(idCategory)}>{nameCategory}</li>
          </>
          
        
      
    );

    
}