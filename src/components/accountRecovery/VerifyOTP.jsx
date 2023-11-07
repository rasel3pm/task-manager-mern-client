import React, { useState } from "react";
import ReactCodeInput from "react-code-input";
import { errorToast } from "../../helper/FormValidation";
import { VerifyOTPRequest } from "../../ApiRequest/ApiRequest";
import { useNavigate } from "react-router-dom";
import { getEmail } from "../../helper/appHelper";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const SubmitOTP = () => {
    if (otp.length === 4) {
      VerifyOTPRequest(getEmail(), otp).then((res) => {
        if (res === true) {
          navigate("/reset-password");
        }
      });
    } else {
      errorToast("OTP must be 4 digit");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>OTP VERIFICATION </h4>
                <p>
                  A 6 Digit verification code has been sent to your email
                  address.{" "}
                </p>
                <ReactCodeInput
                  onChange={(value) => setOtp(value)}
                  // inputStyle={defaultInputStyle}
                  fields={4}
                />
                <br /> <br />
                <button
                  onClick={SubmitOTP}
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

export default VerifyOTP;
