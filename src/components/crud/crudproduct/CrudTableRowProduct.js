import React from "react";

const CrudTableRowProduct = ({ el, setDataToEdit, deleteData }) => {
    let {
        description,
        availableProduct,
        priceProduct,
        nameProduct,
        idProduct,
      } = el;
      return (
        <tr>
          <td>{el.category.nameCategory && (el.category.nameCategory)}</td>
          <td>{nameProduct}</td>
          <td>{priceProduct}</td>
          <td>Disponible</td>
          <td>{description}</td>
          <td>
            <button onClick={() => setDataToEdit(el)}>Editar</button>
            <button onClick={() => deleteData(idProduct)}>Eliminar</button>
          </td>
        </tr>
      );
};

export default CrudTableRowProduct;