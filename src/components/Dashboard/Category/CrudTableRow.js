import React from "react";

const CrudTableRow = ({el,setDataToEdit,deleteData}) => {
    let {nameCategory,description,idCategory }=el;

  return (
      <tr>
        <td>{nameCategory}</td>
        <td>{description}</td>
        <td className="table-buttons">
          <span className="table-btn-edit" onClick={()=>setDataToEdit(el)}><i class="fas fa-edit"></i></span>
          <span className="table-btn-delete"onClick={()=>deleteData(idCategory)}><i class="fas fa-trash-alt"></i></span>
        </td>
      </tr>
  );
};

export default CrudTableRow;
