import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  errorToast,
  isEmail,
  isEmpty,
  isMobile,
} from "../../helper/FormValidation";
import { registerRequest } from "../../ApiRequest/ApiRequest";

const Registration = () => {
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  let navigate = useNavigate();

  const onRegistration = () => {
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo =
      "https://media.licdn.com/dms/image/D5603AQHuBvgWTGbvYQ/profile-displayphoto-shrink_800_800/0/1689275798067?e=2147483647&v=beta&t=UYVhCwf5sKOM1P9vhuGcBHk3vX8xP_3UGdjuvklGTcI";

    if (isEmail(email)) {
      errorToast("Valid Email Address Required !");
    } else if (isEmpty(firstName)) {
      errorToast("First Name Required !");
    } else if (isEmpty(lastName)) {
      errorToast("Last Name Required !");
    } else if (!isMobile(mobile)) {
      errorToast("Valid Mobile  Required !");
    } else if (isEmpty(password)) {
      errorToast("Password Required !");
    } else {
      registerRequest(email, firstName, lastName, mobile, password, photo).then(
        (result) => {
          if (result === true) {
            navigate("/login");
          }
        }
      );
    }
  };

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <hr />
              <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                  <div className="col-md-4 p-2">
                    <label>Email Address</label>
                    <input
                      ref={(input) => (emailRef = input)}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>First Name</label>
                    <input
                      ref={(input) => (firstNameRef = input)}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Last Name</label>
                    <input
                      ref={(input) => (lastNameRef = input)}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Mobile Number</label>
                    <input
                      ref={(input) => (mobileRef = input)}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Password</label>
                    <input
                      ref={(input) => (passwordRef = input)}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                </div>
                <div lassName="row mt-2 p-0">
                  <div className="col-md-4 p-2">
                    <button
                      onClick={onRegistration}
                      className="btn mt-3 w-100 float-end btn-primary animated fadeInUp"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
