import { useEffect } from "react";
import { getProfileDetailsRequest } from "../../ApiRequest/ApiRequest";
import { useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Profile = () => {
  useEffect(() => {
    getProfileDetailsRequest();
  }, []);

  let profileData = useSelector((state) => state.profile.value);
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="container">
        <div className="d-flex justify-content-between">
          <h3>Welcome {profileData.firstName} !</h3>
          <Link
            to={"/Profile-update/" + profileData["_id"]}
            className="btn btn-outline-secondary btn-sm"
          >
            Update
          </Link>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <img
                  src={profileData["photo"]}
                  alt={profileData["firstName"]}
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-2">
                  {" "}
                  {profileData["firstName"] + " " + profileData["lastName"]}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <ProfileDetails profileData={profileData} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
