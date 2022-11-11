import React from 'react'

const NewsLetterForm = () => {
  return (
    <div>
         <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Weekly digest of whats new and exciting from us.</p>
          
          <div className="d-block text-center ps-5 pe-5 m-auto gap-2">
          {/* <input type="text"
              className="form-control m-1" name="" id="" aria-describedby="helpId" placeholder="John Dea"/> */}
           
            <input id="newsletter1" type="text" className="form-control m-1" placeholder="Email address"/>
            <button className="btn btn-outline-primary m-2" type="button">Subscribe</button>
          </div>
        </form>
    </div>
  )
}

export default NewsLetterForm