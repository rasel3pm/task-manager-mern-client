import { useState } from "react";
import { useSelector } from "react-redux";
import { ProfileUpdateRequest } from "../../ApiRequest/ApiRequest";
import { getBase64 } from "../../helper/FormValidation";

const ProfileUpdate = () => {
  let profileData = useSelector((state) => state.profile.value);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
    photo: "",
  });
  const changeHandaler = (property, value) => {
    if (property === "photo") {
      const file = value.target.files[0]; // Get the selected file
      getBase64(file).then((base64) => {
        console.log(base64);
      });
    } else {
      setFormData({ ...formData, [property]: value });
    }
  };

  const onSubnit = () => {
    ProfileUpdateRequest(
      formData.email,
      formData.firstName,
      formData.lastName,
      formData.mobile,
      formData.password,
      formData.photo
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <label className="pb-2 text-black-50">First Name</label>
          <input
            type="text"
            onChange={(e) => {
              changeHandaler("firstName", e.target.value);
            }}
            defaultValue={profileData["firstName"]}
            className="form-control"
          />
          <br />
        </div>
        <div className="col-md-6">
          <label className="pb-2 text-black-50">Last Name</label>
          <input
            type="text"
            defaultValue={profileData["lastName"]}
            onChange={(e) => {
              changeHandaler("lastName", e.target.value);
            }}
            className="form-control"
          />
          <br />
        </div>
        <div className="col-md-6">
          <label className="pb-2 text-black-50">Email </label>
          <input
            type="text"
            readOnly
            defaultValue={profileData["email"]}
            onChange={(e) => {
              changeHandaler("email", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="pb-2 text-black-50">Mobile Number </label>
          <input
            type="text"
            defaultValue={profileData["mobile"]}
            onChange={(e) => {
              changeHandaler("mobile", e.target.value);
            }}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="pb-2 text-black-50">Photo </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              changeHandaler("photo", e);
            }}
            className="form-control"
          />
        </div>
        <div className="col-md-6 mt-4">
          <button onClick={onSubnit} className="btn bg-success text-white w-50">
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
