import React from 'react'
import CrudTableRowProduct from './CrudTableRowProduct';

const CrudTablePro = ({data,setDataToEdit,deleteData}) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                       <th>CATEGORIA</th>
                        <th>NOMBRE</th>
                        <th>PRECIO</th>
                        <th>DISPONIBILIDAD</th>
                        <th>DESCRIPCION</th>
                    </tr>
                </thead>
                <tbody>

                    {data.length > 0 ? (
                    data.map(el => <CrudTableRowProduct key={el.idProduct} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                ):(
                <tr>
                    <td colSpan="2">Sin datos</td>
                </tr>
                    )}
                </tbody>
            </table>       
        </div>
    );
};

export default CrudTablePro;
