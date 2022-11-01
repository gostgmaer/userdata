import React, { useEffect, useRef, useState } from "react";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";
import ContactForm from "./ContactForm";
import Lists from "./Lists";

const date = new Date().toDateString();
const ContactData = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const firstnameRef = useRef;
  useEffect(()=>{
   
  },[])
  return (
    <div>
      <div className=" col-12  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">Contact Lists Application</div>
          <div className="form-group  p-2">
            {/* <label className=" pb-4">
              Please Fill te Form To Continue
            </label> */}
            <div>
              <ContactForm
                firstName={firstName}
                setFirstName={setFirstname}
                lastName={lastName}
                setLastName={setLastName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
              />
            </div>
          </div>
          <div>
            <Lists></Lists>
          </div>
          <div className="card-footer text-muted">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactData;
