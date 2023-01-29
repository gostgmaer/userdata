import React from "react";
import { GetQuotes } from "./APicall";

const Show = ({ options, url, value, setValue }) => {
  return (
    <React.Fragment>
      <div className=" p-1 rounded-0 card m-auto  text-center">
        <div className="card-body  m-auto col-5">
          <p className="card-text">
            <a target="_blank" href={value.url} rel="noreferrer">{value.content}</a>
          </p>
          <GetQuotes
            value={value}
            setValue={setValue}
            options={options}
            url={url}
          ></GetQuotes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Show;
