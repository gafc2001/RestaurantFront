import React, { useState, useEffect, useReducer } from "react";
import { FilterCategory } from "./FilterCategory";
import { TYPES } from "../../acctions/shoppingAction";
import { helpHttp } from "../helpers/helpHttp";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../../reducers/shoppingReducer";

export const Header = ({ filtCategory,removeCategory }) => {
  let url = "https://restaurantrestapi.herokuapp.com/api/categories";
  useEffect(() => {
    //setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.length > 0) {
          dispatch({ type: TYPES.READ_ALL_CATEGORY, payload: res });
          //setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          //setError(res);
        }
        //setLoading(false);
      });
  }, [url]);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { category } = state;
  return (
    <header className="header">
      <div className="header-info">
        <div className="page-info">
          <h2 className="page-name">{sessionStorage.getItem("username")}</h2>
          <p className="date">Tuesday, 2 Feb 2021</p>
        </div>
      </div>
      <div className="categories">
        <ul className="category-list">
          <li class="category-item" onClick={()=>removeCategory(null)}>
            <span>All</span>
          </li>
          {category &&
            category.map((item, index) => (
              <FilterCategory
                key={index}
                data={item}
                filtCategory={filtCategory}
              />
            ))}
        </ul>
      </div>
    </header>
  );
};
