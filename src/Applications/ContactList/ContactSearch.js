import React from "react";
import { BiSearch } from "react-icons/bi";
const ContactSearch = ({
  contactlist,
  setContactList,
  searchData,
  SetSearchdata,
}) => {
  const searchItem = (e) => {
    SetSearchdata(e.target.value);
  };
  return (
    <div>
      <div className="mb-3 col-6 m-auto p-3 pb-0 d-flex">
        <span className="input-group-text" id="addon-wrapping">
          <BiSearch></BiSearch>
        </span>{" "}
        <input
          value={searchData}
          type="text"
          onChange={searchItem}
          className="form-control"
          name="search"
          id="search"
          aria-describedby="helpId"
          placeholder="Search with Name"
        />
      </div>
    </div>
  );
};

export default ContactSearch;
