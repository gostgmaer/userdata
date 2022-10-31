import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const date = new Date().toDateString();
function LoginPage() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <div className=" col-10  m-auto">
        <div className=" m-2 rounded-3 card text-center">
          <div className="card-header bg-light">Login and Logout Page</div>
          <div className="form-group  p-5">
            <label className=" pb-4">Login or Logout</label>
            <div>
              <button
                type="button"
                onClick={loginWithRedirect}
                className="btn btn-primary m-2"
              >
                Login
              </button>
              <button
                type="button"
                onClick={logout}
                className="btn btn-warning m-2"
              >
                logout
              </button>
            </div>
          </div>

          <div className="card-footer text-muted">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
