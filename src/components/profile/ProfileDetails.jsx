import { motion } from "framer-motion";
const ProfileDetails = ({ profileData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">First Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profileData["firstName"]}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Last Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profileData["lastName"]}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profileData["email"]}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Mobile No </p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profileData["mobile"]}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileDetails;
