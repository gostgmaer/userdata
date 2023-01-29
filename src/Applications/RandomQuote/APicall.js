import React, { useEffect } from "react";
import axios from "axios";
import { notifyerror, notifyinfo } from "../../Utils/Notification/notify";

const APicall = ({ options, url, value, setValue }) => {
  useEffect(() => {
    const Loadquote = async () => {
      try {
        let res = await axios.get(url, options);
        setValue(res.data);
        notifyinfo("Data recived Success", 2000);
      } catch (error) {
        notifyerror(error.message, 2000);
      }
    };
    Loadquote();
  }, [options, url]);
};
export const GetQuotes = ({ options, url, value, setValue }) => {
  const getAPIQuotes = async () => {
    try {
      let res = await axios.get(url, options);
      setValue(res.data);
      notifyinfo("Data recived Success", 2000);
    } catch (error) {
      notifyerror(error.message, 2000);
    }
  };
  return (
    <button
      type="button"
      onClick={getAPIQuotes}
      className="btn  col-8 btn-outline-success">
      Get Quotes
    </button>
  );
};

export default APicall;
