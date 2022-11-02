import React from "react";
import { BiEdit, BiTrash, BiCheckSquare, BiSearch } from "react-icons/bi";
import {POST,PUT,PATCH,DELETE,GET  } from "../../services/network";
import {
  notifySuccess,
  notifydefault,
  notifyerror,
  notifyinfo,
  notifywarning,
} from "../../Utils/Notification/notify";
import { ToastContainer } from "react-toastify";
import ContactSearch from "./ContactSearch";
const Lists = ({
  contactlist,
  setContactList,
  searchData,
  SetSearchdata,
  editContact,
  setEditContact,
}) => {
  const handleDelete = async ({ id }) => {
    setContactList(contactlist.filter((data) => data.id !== id));
     await DELETE(`Contacts/${id}.json`,'','');
  };
  const editContacthamdler = ({ id }) => {
  
    // console.log(editContact);
    let selectContact = contactlist.find((contact) => contact.id === id);
    setEditContact(selectContact);
    console.log(editContact);
//   console.log(selectContact);
  };
  
  return (
    <div>
      <div className=" col-8  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">Basic Toto Data</div>
          <div className=" d-block">
            <ContactSearch
              searchData={searchData}
              contactlist={contactlist}
              setContactList={setContactList}
              SetSearchdata={SetSearchdata}
            ></ContactSearch>
            <div>
              <div className="p-2 unstyled">
                {contactlist
                  .filter((val) => {
                    if (searchData === "") {
                      return val;
                    } else if (
                      val.firstName
                        .toLowerCase()
                        .startsWith(searchData.toLowerCase()) ||
                      val.lastName
                        .toLowerCase()
                        .startsWith(searchData.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    // console.log(val);
                    return (
                      <li className=" list-unstyled bg-light m-1" key={key}>
                        <div className=" col-12 d-flex">
                          <div className=" col-9 p-1 text-start ms-3">
                            <span>{val.firstName} </span>

                            <span>{val.lastName}</span> :
                            <span>{val.email}</span>
                           
                          </div>
                          <div className=" col-3">
                            <div className="list-group list-group-horizontal m-0">
                              <button
                                type="button"
                                className="list-group-item me-1 bg-success text-light"
                              >
                                <BiCheckSquare></BiCheckSquare>
                              </button>
                              <button
                                type="button"
                                className="list-group-item text-light bg-info  me-1"
                                aria-current="true"
                                onClick={() => editContacthamdler(val)}
                              >
                                <BiEdit></BiEdit>
                              </button>
                              <button
                                type="button"
                                className="list-group-item me-1 text-light bg-warning"
                                onClick={() => handleDelete(val)}
                              >
                                <BiTrash></BiTrash>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Lists;
