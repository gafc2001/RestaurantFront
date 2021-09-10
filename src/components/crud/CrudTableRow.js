import React from "react";

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {
    let {nameCategory,description,idCategory }=el;

  return (
      <tr>
        <td>{nameCategory}</td>
        <td>{description}</td>
        <td>
          <button onClick={()=>setDataToEdit(el)}>Edit</button>
          <button onClick={()=>deleteData(idCategory)}>Delete</button>
        </td>
      </tr>
  );
};

export default CrudTableRow;
