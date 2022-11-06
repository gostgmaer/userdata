import React from "react";
import { Moment } from "moment";
import { FaSearch,FaWind,FaTint,FaSun } from "react-icons/fa";

const ShowWeather = ({ lat, loon, Weather, setWeather }) => {
  console.log(Weather);
 
    if (!Weather) {
    return   <div>Error Loading Data</div>
      
    }else{
      return  <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6 col-xl-4">
            <div class="card">
              <div class="card-body p-4">
                <div class="d-flex">
                  <h6 class="flex-grow-1">{Weather.name}</h6>
                 
                  <h6>{}</h6>
                </div>

                <div class="d-flex flex-column text-center mt-5 mb-4">
                  <h6 class="display-4 mb-0 font-weight-bold">{}</h6>
                  <span class="small">{}</span>
                </div>

                <div class="d-flex align-items-center">
                  <div class="flex-grow-1">
                    <div>
                     <FaWind></FaWind>
                      <span class="ms-1"> {}</span>
                    </div>
                    <div>
                     <FaTint></FaTint>
                      <span class="ms-1"> {} </span>
                    </div>
                    <div>
                     <FaSun></FaSun>
                      <span class="ms-1">{} </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                      width={75}
                    />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    }
   

};

export default ShowWeather;
