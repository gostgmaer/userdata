import React from "react";
import { FaReact } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import SimpleTime from "../../ComponentBlock/SimpleTime";

function Header() {
  return (
    <React.Fragment>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <FaReact></FaReact>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <NavLink className="nav-link px-2 text-white" to="./">
                Home{" "}
              </NavLink>
              <NavLink to="/calculator" className="nav-link px-2 text-white">
                Calculator
              </NavLink>
              <li>
                <NavLink to="/accordian" className="nav-link px-2 text-white">
                  Accordian
                </NavLink>
              </li>
              <li>
                <NavLink to="./" className="nav-link px-2 text-white">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink to="./" className="nav-link px-2 text-white">
                  About
                </NavLink>
              </li>
            </ul>

            <div className=" text-center">
              <SimpleTime></SimpleTime>
            </div>

            <div className="text-end">
              <Link className="btn btn-outline-light me-3" to="/login">
                Login
              </Link>
              <Link className="btn btn-warning" to="/registration">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
