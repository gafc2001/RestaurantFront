import React from 'react'
import CrudTableRow from './CrudTableRow';

const CrudTable = ({data,setDataToEdit,deleteData}) => {
    return (
        <div>
            <h3>Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name Category</th>
                        <th>description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                    data.map(el => <CrudTableRow key={el.idCategory} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
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

export default CrudTable;
