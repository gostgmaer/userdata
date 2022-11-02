import React from 'react'

const date = new Date().toDateString();
function SimpleDate() {
  return (
    <React.Fragment>
    <div className="rounded-0 card text-center">
      <div className="card-footer text-muted">{date}</div>
    </div>
  </React.Fragment>
  )
}

export default SimpleDate