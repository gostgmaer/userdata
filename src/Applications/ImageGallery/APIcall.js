import React, { useEffect } from "react";
import axios from "axios";
import { notifyerror, notifySuccess } from "../../Utils/Notification/notify";

const APIcall = ({ queryData, setqueryData, img, setimg }) => {
  // const [queryData, setqueryData] = useState();
  // const [Images, setImages] = useState();

  let query = {
    client_id: "i5Kt1JQq4jZRXZeB2oO8D3J8avpZ_Xgy3ShUlYFNHh4",
    query: queryData,
    per_page: 100,
    order_by: "relevant",
  };

  useEffect(() => {
    // console.log(queryData.length===3);

    if (queryData) {
      data();
    }
  }, []);

  const data = async () => {
    try {
      let res = await axios.get("https://api.unsplash.com/search/photos", {
        params: query,
      });
      setimg(res.data);
      notifySuccess("Image Loaded Successful!", 5000);
    } catch (error) {
      console.log(error);
      notifyerror(error.response.data, 5000);
    }
  };
};

export default APIcall;
