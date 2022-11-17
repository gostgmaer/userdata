// import { async } from "@firebase/util";
import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import axios from "../../api/axios";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link,Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Accordian from "Applications/Accordian/Accordian";
import Birthday from "Applications/BirthDayReminder/Birthday";

const LOGIN_URL = "/userauth/authservice/session";
function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, SetErrmsg] = useState("");
  const [succcess, setSuccess] = useState();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    SetErrmsg("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = btoa(password);
    try {
      let loginObject = {
        grant_type: "password",
        password: hashedPassword,
        provider_type: "ldap-internal",
        searchKey: "mail",
        searchVal: user,
      };

      let response = await axios.post(LOGIN_URL, loginObject, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Basic c2NoZWR1bGluZ3NlcnZlcjpwYXNzd29yZEAxMjM=",
        },
        withCredentials: true,
      });

      response = response["data"];
      const userData = jwt_decode(response["access_token"]);
      //   console.log(userData);
      const accessToken = response["access_token"];
      const roles = userData["payload"]["role"];
      setAuth({ user, password, roles, accessToken });

      //   console.log(setAuth);
      console.log(user, password, roles, accessToken);
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        SetErrmsg("Server Not Respond");
        toast.error("Server Not Respond", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (error.response?.status === 400) {
        SetErrmsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        SetErrmsg("Unauthorize");
      } else {
        SetErrmsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  let notify = (message, msgType) => {
    toast.msgType(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <React.Fragment>
      {succcess ? (
        <div>
          <h1>You are logged in!</h1> <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </div>
      ) : (
        <div className="  card-body">
          <p
            ref={errRef}
            className={errmsg ? "errmsg" : "offscreen"}
            area-live="assertive"
          >
            {errmsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user"></label>
              <input
                type="text"
                required
                className="form-control"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                autoComplete="off"
                ref={userRef}
                name="user"
                id="user"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                name="login"
                id="login"
                className="btn btn-primary"
              >
                Sign in
              </button>
            </div>
            <div>
              <p>
                Need a Account ? <br />
                <span className="line link-info">
                  {/*react router url*/}
                  <Link to="" className=" btn btn-info">
                    Sign up
                  </Link>
                </span>{" "}
               
                <Link to='/users'>USERS</Link>
              </p>
              <Outlet/>
            </div>
          </form>
        </div>
      )}
      <ToastContainer></ToastContainer>
    </React.Fragment>
  );
}

export default Login;
