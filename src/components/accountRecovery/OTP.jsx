import React from "react";
import ReactCodeInput from "react-code-input";

const OTP = () => {
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
                  // onChange={(value) => SetOTP(value)}
                  // inputStyle={defaultInputStyle}
                  fields={6}
                />
                <br /> <br />
                <button
                  // onClick={SubmitOTP}
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

export default OTP;
