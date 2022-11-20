import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <Link className='navbar-brand' to="/"><FaReact></FaReact></Link>
  )
}

export default Brand