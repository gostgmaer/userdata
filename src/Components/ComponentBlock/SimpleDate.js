import React from 'react'
import moment from "moment/moment";

const date = new Date()

function SimpleDate() {
  return (
    <React.Fragment>
    <div className="rounded-0 py-2 text-center">
      <div className="card-footer text-muted">{ moment(date).format(' Do MMMM YYYY')}</div>
    </div>
  </React.Fragment>
  )
}

export default SimpleDate