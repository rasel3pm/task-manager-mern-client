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
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABHhJREFUSEudVWtMFFcU/s7M7LLLe11ESiOFIu2yFBvA1VilQk20bQzEtiGNURMba/3RV2xSY9ImFtPQ2tBHTOnDpMQm/dGSNgJaq0jBYniIYkMVKJFCtfIWXGCZfczMaWbbVZBZ+7h/JnPPud937jnfOZdgsPYzhKZ6hy3gMyWzoj3BgIsI6cxIIGIVoEkm9JGGdoHQICvqb5G2JHdjYaNyJxzN22BQ3rE8q4XlNCLsAVMJgGijIObseUD0NbNwOCoCv5za2OmZ63+bgEHr6x2LvLK4mRj7ANz/D8BzzczAqMDaW35T4Ku2J69MhYx/EfwN7psVd4JQpv//B/BbrszsJuL3pBj6qLGwa0Y3BIHyavMiLfBuIeDz/ws+J6BJBkonvVzRVdLlJ72gdbXOTALVhEuLJEiIlmJgEa1gMLyqF7OKBwHNH+6iwwT12aainjO0/rTD7pOFg2B6bqECCBbJCqdtOTalPAVXwiNgaDg/1oq668fRMX4OXlU2IvGCcUya8GyjR49nZ2uq1mykFrNgxqrEfLyZUwarFDkPaMrvxqc9H6L296pwtxiBoG2l/Oqs15nwrpHXoogEvJFTBtfi1YYgQ7PXsbWxCH7Vt9DOmIFAn9Ha6qwqEJ4xSk9qTDq+LDgaVlATvnGUduzFhfE2Ix+FQc2UX5PVwUDOnR4iSci2PYxDa46EJbjpn0R55wE0Dp0y9GFgQL/BVRCWGnkkWZNRue5bRJtiFph1NQ16rmFP2wvBb5h1lfJrnP0MSjVyiJSi8HTaFmzP2BWUaGjp4DOBadQP/oDyztK79aROYJyi0KlYcxx2OV7BmiUFiBAtwW1PYAYXxlvxRW8FRuXh8AT6QFxbm1UFXlhk/ZRAAqKkaEiCCWkx6Xgwzhls/l53F3rd3cGmk5VZqPqAXbgUEFrCytQkmJAcuRTF95UEgdz+m/j15mVMK1PIjH8I90amQFZlnB2pR/9U38KGC8l0XU2WSwUaAESFgtDznZvgwk7Hy8iIdYRNgU58wzuGyt5PcOJa9e3RQcGYBkXWdtDK7xx2s0k6COYd+v1NghkrE9fgHdehuxVvnm3CdwNvX9yH8+Ot0FjTbT4CnWgqurSZChoKpMD0xApAPUrAkkRrEg6s+ADO+Ox/TaBoCi5N/owDF/diVB7RwOiXRG1346bu08FxveHk8ijZG9gukLksLXZZ3O7MV7HcngfrHGmGYwsVun/qCip6yrXOGx3DGqO8ufjy+/qZWw/Lqu+XxZoU00sE8TW7ZbFtW8bzKLxnA/ReCMlzLklobE/5J9E0/COqB6q0gZm+YTAdPlt8aX/Id97LVdDgjA5M004C9ppFS3yu3WV5LHkjchNWQa+NSCIIBIUVeJRptI+1oHW0iVtGfvKD8YcGVIQiNyTQN53fOM12i7aaWXwRhHwBQpQtwm5Jj3tAspnt0OU7Kg+hf7pPGZNHvCC4CdQuCurHes7vTGXYt7egMtWiLLauBYuPM8MFcAoBQhCAEAAwCNA5UVNPninurgtXoz8BFJjQzxsMdZsAAAAASUVORK5CYII=";
    // let photo =
    //   "https://media.licdn.com/dms/image/D5603AQHuBvgWTGbvYQ/profile-displayphoto-shrink_800_800/0/1689275798067?e=2147483647&v=beta&t=UYVhCwf5sKOM1P9vhuGcBHk3vX8xP_3UGdjuvklGTcI";

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
