import React, { useState, useEffect } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { data } from "./Data";

const Tabs = ({ setTitle }) => {
  const [Value, setValue] = useState(0);
  const [loading, setloading] = useState(false);
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
    setTitle("Tabs");
  }, [setTitle]);
  if (Jobs.length) {
    const { order, title, dates, duties, company } = Jobs[Value];

    return (
      <div class="row">
        <div class="col-4">
          <div class="d-flex align-items-start">
            <div
              class="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {Jobs.map((data, index) => {
                return (
                  <button key={index}
                   className=" btn btn-dark m-1"
                    // onClick={changeValue}
                    role="tab" onClick={e=>setValue(index)}
                  
                  >{data.company}</button>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" col-6">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <article class="job-info text-start">
                <h4>{title}</h4>
                <span className=" bg-success bg-opacity-50 h6 p-1 rounded">
                  {company}
                </span>
                <p class="job-date">{dates}</p>
                {duties.map((duty, index) => {
                  return (
                    <div class="job-desc" key={index}>
                      <BiArrowFromLeft value={{ style: { color: 'green' } }}></BiArrowFromLeft>
                      <span>{duty}</span>
                    </div>
                  );
                })}
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Tabs;
