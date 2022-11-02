import React, { useEffect, useReducer, useRef, useState } from "react";
import {POST,PUT,PATCH,DELETE,GET  } from "../../services/network";
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
import { database } from "../../services/Firebase";


const date = new Date().toDateString();
function ContactData() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactlist, setContactList] = useState([]);
  const [searchData, SetSearchdata] = useState("");
  const [editContact, setEditContact] = useState(null);
  const firstnameRef = useRef;
  useEffect( () => {
    const getData = async()=>{
     
      const data = await GET(`Contacts.json`);
        // console.log(data);
        let array=[]
     Object.entries(data).forEach(([key,val]) => {
      
        array.push({id:key,firstName:val.firstName,lastName:val.lastName,phone:val.phone,email:val.email})  
      });
      setContactList(array);
      
        // console.log(data);
        // return data
      
    }
    let data = getData()
    
   
   
  }, []);


//   console.log(Domain);
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
                firstnameRef={firstnameRef}
                contactlist={contactlist}
                setContactList={setContactList}  editContact={editContact}
                setEditContact={setEditContact}
              />
            </div>
          </div>
          <div>
            <Lists
              contactlist={contactlist}
              setContactList={setContactList}
              firstName={firstName}
              setFirstName={setFirstname}
              lastName={lastName}
              setLastName={setLastName}
              searchData={searchData}
              SetSearchdata={SetSearchdata}
              editContact={editContact}
              setEditContact={setEditContact}
            ></Lists>
          </div>
          <div className="card-footer text-muted">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default ContactData;
