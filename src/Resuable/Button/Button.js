import React from 'react'

const Button = ({event,btntext,styles,classes}) => {
  return (
   <button className={classes} style={styles} onClick={(e)=>event(e)}>{btntext}</button>
  )
}

export default Button