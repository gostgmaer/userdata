import React from 'react'
import { Link } from 'react-router-dom';

const HomeList = ({item}) => {
  return (
    <li className='HomeList'>
        <div className="card border-primary">
          <img className="card-img-top" src="" alt=""/>
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text"><Link to={item.url}>{item.image}</Link></p>
          </div>
        </div>
    </li>
  )
}

export default HomeList