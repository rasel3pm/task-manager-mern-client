import React, { Fragment, useRef } from "react";
import { Link, NavLink, BrowserRouter, HashRouter } from "react-router-dom";
import { errorToast, isEmail, isEmpty } from "../../helper/FormValidation";
import { LoginRequest } from "../../ApiRequest/ApiRequest";

const Login = () => {
  let passRef,
    emailRef = useRef();

  const SubmitLogin = () => {
    let email = emailRef.value;
    let pass = passRef.value;
    if (isEmail(email)) {
      errorToast("Invalid Email Address");
    } else if (isEmpty(pass)) {
      errorToast("Password Required");
    } else {
      LoginRequest(email, pass).then((result) => {
        if (result === true) {
          window.location.href = "/";
        }
      });
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <input
                  ref={(input) => (emailRef = input)}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <input
                  ref={(input) => (passRef = input)}
                  placeholder="User Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={SubmitLogin}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
                <hr />
                <div className="float-end mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/Registration"
                    >
                      Sign Up{" "}
                    </Link>
                    <span className="ms-1">|</span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/SendOTP"
                    >
                      Forget Password
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
