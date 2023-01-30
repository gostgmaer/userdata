import React, { useState,useEffect } from "react";
import APIcall, { data, param } from "./APIcall";
import Card from "./Card";
import SearchForm from "./SearchForm";

const ImageGallery = () => {
  const [queryData, setqueryData] = useState("house");
  const [img, setimg] = useState([]);
 
 
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
