import React, { useState } from "react";
import APIcall, { data, param } from "./APIcall";
import Card from "./Card";
import SearchForm from "./SearchForm";

const ImageGallery = ({ setTitle }) => {
  const [queryData, setqueryData] = useState("house");
  const [img, setimg] = useState([]);
  setTitle("Stock Image Gallery");
 
  return (
    <div>
        
      <SearchForm
        queryData={queryData}
        setqueryData={setqueryData}
        img={img}
        setimg={setimg}
      ></SearchForm>
     <Card img={img} ></Card>
      <APIcall
     
        queryData={queryData}
        setqueryData={setqueryData}
        img={img}
        setimg={setimg}
      ></APIcall>
    </div>
  );
};

export default ImageGallery;
