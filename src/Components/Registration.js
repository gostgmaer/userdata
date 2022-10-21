
import React, { useState } from 'react'
import '../Assets/Styles.scss'

function Registration() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const handleInputChange = (e)=>{
        const {id,value}=e.target;
        console.log(id);
        if (id===firstName) {
            setFirstName(value)
            
        } if (id===lastName) {
            setLastName(value)
            
        } 
        if (id===email) {
            setEmail(value)
            
        } 
        if (id===password) {
            setPassword(value)
            
        } 
        if (id===confirmPassword) {
            setConfirmPassword(value)
            
        } 
       
    }
    const handleSubmit =()=>{
        console.log(firstName,lastName,email,password,confirmPassword);
    }
  return (
    <div>
          <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" >First Name </label>
                  <input onChange = {(e) => handleInputChange(e)} className="form__input" value={firstName} type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" >Last Name </label>
                  <input  type="text" onChange = {(e) => handleInputChange(e)}  name="" id="lastName" value={lastName}  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" >Email </label>
                  <input  type="email" onChange = {(e) => handleInputChange(e)} id="email" value={email} className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label">Password </label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)} type="password" value={password}  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" >Confirm Password </label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)} type="password" value={confirmPassword} id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" onClick={()=>handleSubmit()} className="btn">Register</button>
          </div>
      </div>      
    </div>
  )
}

export default Registration