import React from "react";
import { notifyerror } from "Utils/Notification/notify";

const Card = ({ img }) => {
  if (img.length !== 0) {
    return (
      <div className=" row">
        {img.results.map((image, key) => {
          return (
            <div class="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe" key={key}>
              <img
                src={image.urls.regular} height="300px"
                class="img-responsive img-thumbnail"
                alt={image.alt_description}
              />
            
            </div>
          );
        })}
      </div>
    );
  } else {
    notifyerror("Please Check the Data", 2000);
  }
};

export default Card;
