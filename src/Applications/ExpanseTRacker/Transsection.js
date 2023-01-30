import React from 'react'

const Transsection = ({expance}) => {
  return (
    <li
   
    className="list-group-item d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">{expance.name}</div>
    <span className="badge bg-primary rounded-pill">$ {expance.amount}</span>
  </li>
  )
}

export default Transsection