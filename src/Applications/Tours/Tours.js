import React, { useEffect, useState } from "react";
import API from "./API";
import ListCard from "./ListCard";

const Tours = ({ setTitle }) => {
  const [Tours, setTours] = useState([]);

  useEffect(() => {
    setTitle("Tourism Place Listing");
  }, []);

  return (
    <React.Fragment>
      <API setTours = {setTours}></API>
      <ListCard Tours={Tours} setTours = {setTours}></ListCard>
    </React.Fragment>
  );
};

export default Tours;
