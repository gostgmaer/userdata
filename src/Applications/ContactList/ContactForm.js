import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { POST, PUT, PATCH, DELETE, GET } from "../../services/network";

import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";
import {
  BiMailSend,
  BiPhone,
  BiPlus,
  BiUser,
  BiUserCheck,
} from "react-icons/bi";

function ContactForm({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone,
  contactlist,
  setContactList,
  editContact,
  setEditContact,
}) {
  const submitData = async (e) => {
    let body = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    };

    e.preventDefault();
   let data
    try {
      if (
        contactlist.findIndex((contactlist) => contactlist.email === email) ===
        -1
      ) {
        try {
           data = await POST(`Contacts.json`, body);
        } catch (error) {
          console.log(error);
        }

        setContactList([
          ...contactlist,
          {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            complete: false,id:data.name
          },
        ]);
        notifySuccess(
          <div>
            Contact: <BiMailSend></BiMailSend> {email} Has Been Added
          </div>,
          2000
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
      } else {
        notifyerror(`Email: ${email} is already Present in the database`, 2000);
      }
    } catch (error) {
      notifyerror(error, 2000);
    }
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
                    <div className="mb-3 p-3 pb-0 d-flex">
                      <span className="input-group-text" id="addon-wrapping">
                        <BiUser></BiUser>
                      </span>{" "}
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
                    <div className="mb-3 p-3 pb-0 d-flex">
                      {" "}
                      <span className="input-group-text" id="addon-wrapping">
                        <BiPhone></BiPhone>
                      </span>
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
                    <div className="mb-3 p-3 pb-0 d-flex">
                      {" "}
                      <span className="input-group-text" id="addon-wrapping">
                        <BiUserCheck></BiUserCheck>
                      </span>
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
                    <div className="mb-3 p-3 pb-0 d-flex">
                      {" "}
                      <span className="input-group-text" id="addon-wrapping">
                        <BiMailSend></BiMailSend>
                      </span>
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
                        <BiPlus></BiPlus> Add Contact
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
