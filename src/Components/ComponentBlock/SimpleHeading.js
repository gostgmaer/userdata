import React from 'react'
import { ToastContainer } from "react-toastify";
import SimpleTime from './SimpleTime';
const SimpleHeading = ({title}) => {
  return (
    <React.Fragment>
    <div className="rounded-0 card  text-center">
      <div className="card-header bg-light fw-bold">{title}</div>
    </div>

    <ToastContainer></ToastContainer>
  </React.Fragment>
  )
}

export default SimpleHeading