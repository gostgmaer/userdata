// import { async } from "@firebase/util";
import React from "react";
import { useRef, useState, useEffect } from "react";

function Login() {
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
    console.log(user, password);
    setSuccess(true);
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
                Need a Account ? <br />{" "}
                <span className="line link-info">
                  {/*react router url*/}
                  <a href="#">Sign up</a>
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}

export default Login;
