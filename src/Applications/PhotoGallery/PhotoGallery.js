import SimpleDate from "Components/ComponentBlock/SimpleDate";
import SimpleHeading from "Components/ComponentBlock/SimpleHeading";
import React, { useEffect, useState } from "react";
import UploadForm from "./UploadForm";



const PhotoGallery = () => {
  const [title] = useState("Photo Galary Application");

  useEffect(() => {
   
  }, []);

 
    return (
      <div>
        <React.Fragment>
          <SimpleHeading title={title}></SimpleHeading>
          <div className=" p-1 rounded-0 card text-center">
            <UploadForm></UploadForm>
          </div>
          <SimpleDate></SimpleDate>
        </React.Fragment>
      </div>
    );
    }

export default PhotoGallery;
