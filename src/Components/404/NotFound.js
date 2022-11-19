import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './index.scss'
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='notfound'>
    <div class="container error-container">
      <div class="row  d-flex align-items-center justify-content-center">
        <div class="col-md-12 text-center">
          <h1 class="big-text">Oops!</h1>
          <h2 class="small-text">404 - PAGE NOT FOUND</h2>
    
        </div>
        <div class="col-md-6  text-center">
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
    
    
          <form class="example" action="action_page.php">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search.." name="search"/>
              <button class="search-btn" type="button"><FaSearch></FaSearch></button>
            </div>
    
          </form>
           <h2 class="small-text">OR</h2>
          
          <Link to="/" class="button button-dark-blue iq-mt-15 text-center">GOTO HOME PAGE</Link>
    
        </div>
    
      </div>
    
    
    </div>
    </div>
  )
}

export default NotFound