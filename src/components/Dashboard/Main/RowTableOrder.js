import React from 'react'

const RowTableOrder = ({report}) => {
    let {user,total,status,description} = report
    let  style = {
      "COMPLETADO": "completed",
      "PENDIENTE": "pending",
      "ENVIANDO": "delivering",
      "PREPARANDO": "preparing" 
    }
    return (
        <tr className="row">
          <td className="customer-col customer-data">
            <div className="profile-image">
              <img src="https://randomuser.me/api/portraits/thumb/men/2.jpg" alt={user.username} />
            </div>
            <span>{user.username}</span>
          </td>
          <td className="order-col">
            {description}
          </td>
          <td className="total-col">{total}</td>
          <td className="status-col">
          {style[status] && <span className={`color-status ${style[status]}`}>{status}</span>}
          </td>
        </tr>
    )
}

export default RowTableOrder
