import React, { useRef } from "react";
import { getEmail, getOTP } from "../../helper/appHelper";
import { ResetPasswordRequest } from "../../ApiRequest/ApiRequest";
import { isEmpty, errorToast, SuccessToast } from "../../helper/FormValidation";
import { useNavigate } from "react-router-dom";

const SetPassword = () => {
  let PasswordRef,
    ConfirmPasswordRef = useRef();
  let navigate = useNavigate();

  const ResetPassHandle = () => {
    let Password = PasswordRef.value;
    let ConfirmPassword = ConfirmPasswordRef.value;
    if (isEmpty(Password)) {
      errorToast("Password Required");
      return false;
    } else if (isEmpty(ConfirmPassword)) {
      errorToast("Confirm Password Required");
      return false;
    } else if (Password !== ConfirmPassword) {
      errorToast("Password & Confirm Password Should be Same");
      return false;
    } else {
      ResetPasswordRequest(getEmail(), getOTP(), Password).then((res) => {
        if (res === true) {
          SuccessToast("Password Reset Success");
          navigate("/login");
        }
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90 p-4">
              <div className="card-body">
                <h4>SET NEW PASSWORD</h4>
                <br />
                <label>Your email address</label>
                <input
                  readOnly={true}
                  value={getEmail()}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <label>New Password</label>
                <input
                  ref={(input) => (PasswordRef = input)}
                  placeholder="New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <label>Confirm Password</label>
                <input
                  ref={(input) => (ConfirmPasswordRef = input)}
                  placeholder="Confirm Password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <button
                  onClick={ResetPassHandle}
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetPassword;
