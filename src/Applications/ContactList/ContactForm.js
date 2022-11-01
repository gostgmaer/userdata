import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";
import { BiMailSend, BiPhone } from "react-icons/bi";

function ContactForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,contactlist,setContactList
}) {
  const submitData = (e) => {
    let body = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    };
   
    e.preventDefault();
    try {
        setContactList([
            ...contactlist,
            { id: uuidv4(), firstName: firstName, lastName: lastName,phone:phone,email:email, complete: false },
          ], );
          notifySuccess(<div> Name: {firstName} {firstName} and Contact: <BiPhone></BiPhone> {phone}, <BiMailSend></BiMailSend> {email} has added  </div>,2000)
    } catch (error) {
        notifyerror(error,2000)
    }
      setFirstName("");
      setLastName(""); 
      setEmail("");
      setPhone(""); 
  };
  const firstnameRef = useRef();

  useEffect(() => {
    // firstnameRef.current.focus();
  });

  const FirstnameChange = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <div className=" col-8  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">
            Please Fill te Form To Continue
          </div>
          <div className="form-group  p-5">
            <div>
              <form className="d-block">
                <div className=" d-flex">
                  <div className="col">
                    <div className="mb-3 p-3 pb-0">
                      <input
                        value={firstName}
                        type="text"
                        ref={firstnameRef}
                        onChange={FirstnameChange}
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        aria-describedby="helpId"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3 p-3 pb-0">
                      <input
                        type="text"
                        onChange={phoneChange}
                        value={phone}
                        className="form-control"
                        name="phoneNumber"
                        id="PhoneNumber"
                        aria-describedby="helpId"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3 p-3 pb-0">
                      <input
                        onChange={lastNameChange}
                        type="text"
                        value={lastName}
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        aria-describedby="helpId"
                        placeholder="last Name"
                      />
                    </div>
                    <div className="mb-3 p-3 pb-0">
                      <input
                        onChange={emailChange}
                        type="email"
                        value={email}
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="helpId"
                        placeholder="info@mail.com"
                      />
                    </div>
                  </div>
                </div>

                <div className=" d-block">
                  <div className="col-12">
                    <div className="mb-3 p-3 pb-0">
                      <button
                        type="button"
                        onClick={submitData}
                        className="btn btn-primary col-4"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default ContactForm;
