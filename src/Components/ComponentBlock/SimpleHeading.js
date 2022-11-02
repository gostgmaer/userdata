import React from 'react'
import { ToastContainer } from "react-toastify";
import SimpleTime from './SimpleTime';
const SimpleHeading = ({title}) => {
  return (
    <React.Fragment>
    <div className="rounded-0 card  text-center">
      <div className="card-header bg-light d-flex"><div className=' text-start col ps-5'>{title} </div> <div className=' text-end col pe-5'><SimpleTime></SimpleTime></div> </div>
    </div>

    <ToastContainer></ToastContainer>
  </React.Fragment>
  )
}

export default SimpleHeading