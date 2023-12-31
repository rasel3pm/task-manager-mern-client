import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { errorToast, isEmail, isEmpty } from "../../helper/FormValidation";
import { LoginRequest } from "../../ApiRequest/ApiRequest";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandaler = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };
  const SubmitLogin = () => {
    const { email, password } = formData;
    if (isEmail(email)) {
      errorToast("Email is required");
      return false;
    } else if (isEmpty(password)) {
      errorToast("Password is required");
      return false;
    } else {
      LoginRequest(email, password).then((res) => {
        if (res === true) {
          window.location.href = "/";
        }
      });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-6 center-screen">
            <div className="card border-primary w-90  p-4">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <input
                  onChange={(e) => changeHandaler("email", e.target.value)}
                  placeholder="email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <input
                  onChange={(e) => changeHandaler("password", e.target.value)}
                  placeholder="password"
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
                <div className=" mt-3">
                  <span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/Registration"
                    >
                      Sign Up
                    </Link>
                    <span className="ms-1">|</span>
                    <Link
                      className="text-center ms-3 h6 animated fadeInUp"
                      to="/send-otp"
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
    </div>
  );
};
export default Login;
