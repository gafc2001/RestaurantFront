import React from 'react'
import OrderTableRow from './OrderTableRow'
const OrderTable = ({data,setDataToEdit}) => {
    return (
        <div className="table-container">
            <h3 className="title">Ordenes</h3>
            <table className="table-content">
                <thead className="thead">
                    <tr>
                        <th>ID de la orden</th>
                        <th>Cliente</th>
                        <th>Estado</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {data.length > 0 ? (
                    data.map(el => <OrderTableRow key={el.idOrder} el={el} setDataToEdit={setDataToEdit}/>)
                ):(
                <tr>
                    <td colSpan="2">Sin datos</td>
                </tr>
                    )}
                </tbody>
            </table>       
        </div>
    )
}

export default OrderTable
