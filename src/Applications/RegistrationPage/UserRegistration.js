import React, { useEffect, useRef, useState } from "react";
import { database } from "../../services/Firebase";
import { ref, push, child, update } from "firebase/database";


const date = new Date().toDateString();
function UserRegistration() {
    const [firstName, setFirstname]= useState('')
    const[lastName,setLastName]=useState('')
    const [countryCode, setCountryCode]= useState('')
    const[phone,setPhone]=useState('')
    const [dbo, setDbo]= useState('')
    const[countryOfBirth,setCountryOfBirth]=useState('')
    const [language, setLanguage]= useState('')
    const[email,setEmail]=useState('')
    const [address, setAddress]= useState('')
    const firstnameRef = useRef();
   
    useEffect(()=>{
        firstnameRef.current.focus()
    },[])

    const submitData = (e)=>{
        let reqBody = {
            firstName:firstName,
            lastName:lastName,
            countryCode:countryCode,
            phone:phone,
            dbo:dbo,
            countryOfBirth:countryOfBirth,
            language:language,
            email:email,
            address:address
        }
        console.log(reqBody);
        try {
            const newPostKey = push(child(ref(database), "posts")).key;
            const updates = {};
            updates["/" + newPostKey] = reqBody;
            return update(ref(database), updates);
        } catch (error) {
            console.log(error);
            
        }
      
    }

  return (
    <div>
      <div className=" col-12  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">
            User Registration Page With Post API
          </div>
          <label className=" p-4">
            Please provide Necessary Data for Continue Registration
          </label>
          <div className="  col-8 m-auto p-4 mb-2 rounded-3 card text-center">
            <form className="d-block">
              <div className=" d-flex">
                {" "}
                <div className="col">
                  <div className="mb-3 p-3 pb-0">
                    <input
                      type="text" ref={firstnameRef} onChange={(e)=>setFirstname(e.target.value)}
                      className="form-control"
                      name="firstName"
                      id="firstName"
                      aria-describedby="helpId"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-3 p-3 pb-0">
                    <input
                      type="text" onChange={(e)=>setCountryCode(e.target.value)}
                      className="form-control"
                      name="countryCode"
                      id="countryCode"
                      aria-describedby="helpId"
                      placeholder="Country Code"
                    />
                  </div>

                  <div className="mb-3 p-3 pb-0">
                    <input
                      type="date" onChange={(e)=>setDbo(e.target.value)}
                      className="form-control"
                      name="dateofBirth"
                      id="dateofBirth"
                      aria-describedby="helpId"
                      placeholder="Date of Birth"
                    />
                  </div>
                  <div className="mb-3 p-3 pb-0">
                    <input onChange={(e)=>setLanguage(e.target.value)}
                      type="text"
                      className="form-control"
                      name="language"
                      id="language"
                      aria-describedby="helpId"
                      placeholder="Prefered language"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3 p-3 pb-0">
                    <input onChange={(e)=>setLastName(e.target.value)}
                      type="text"
                      className="form-control"
                      name="lastName"
                      id="lastName"
                      aria-describedby="helpId"
                      placeholder="last Name"
                    />
                  </div>
                  <div className="mb-3 p-3 pb-0">
                    <input onChange={(e)=>setPhone(e.target.value)}
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      id="phoneNumber"
                      aria-describedby="helpId"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-3 p-3 pb-0">
                    <input onChange={(e)=>setCountryOfBirth(e.target.value)}
                      type="text"
                      className="form-control"
                      name="countryOfBirth"
                      id="countryOfBirth"
                      aria-describedby="helpId"
                      placeholder="Country Of Birth"
                    />
                  </div>
                  <div className="mb-3 p-3 pb-0">
                    <input onChange={(e)=>setEmail(e.target.value)}
                      type="text"
                      className="form-control"
                      name="emailAddress"
                      id="emailAddress"
                      aria-describedby="helpId"
                      placeholder="Enter your Email Address"
                    />
                  </div>
                </div>
              </div>

              <div className=" d-block">
                <div className="col-12">
                  <div className="mb-3 p-3 pb-0">
                    <input
                      type="textarea" onChange={(e)=>setAddress(e.target.value)}
                      className="form-control"
                      name="yourMailingAddress"
                      id="yourMailingAddress"
                      aria-describedby="helpId"
                      placeholder="Enter your  Address"
                    />
                  </div>
                </div>
              </div>
              <div className=" d-block">
                <div className="col-12">
                  <div className="mb-3 p-3 pb-0">
                    <button type="button" onClick={submitData} className="btn btn-primary col-4">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="card-footer text-muted">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
