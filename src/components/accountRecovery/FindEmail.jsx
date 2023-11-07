import { useState } from "react";
import { MatchProfileRequest } from "../../ApiRequest/ApiRequest";
import { useNavigate } from "react-router-dom";

const FindEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const VerifyEmail = async () => {
    await MatchProfileRequest(email).then((res) => {
      if (res === true) {
        navigate("/verify-otp");
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-90  p-4">
              <div className="card-body">
                <h4>Email Address</h4>
                <br />
                <label>Your email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="User Email"
                  className="form-control animated fadeInUp"
                  type="email"
                />
                <br />
                <button
                  onClick={VerifyEmail}
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

export default FindEmail;
