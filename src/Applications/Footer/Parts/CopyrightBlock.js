import React from "react";
import { BiCopy, BiCopyright } from "react-icons/bi";

const CopyrightBlock = ({ Year }) => {
  return (
    <React.Fragment>
      <div class="d-flex  mx-5 ms-5 justify-content-between border-top border-secondary ">
        <p className=" text-start col-3 p-0 mt-3">
          <BiCopyright></BiCopyright> {Year} Company. All rights reserved.
        </p>
        <ul class="nav mt-2 col-6 justify-content-center">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Terms and Condition
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Privacy Policy
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Security
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Sitemap
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">
              Pages
            </a>
          </li>
        </ul>
        <div class=" col-3 text-end mt-3">
          <select
            class=" bg-black border-0 text-light"
            name="language-select"
            id="language-select"
          >
            <option value="en">English</option>
            <option value="es">Espanol</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CopyrightBlock;
