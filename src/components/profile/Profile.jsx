import { useEffect } from "react";
import { getProfileDetailsRequest } from "../../ApiRequest/ApiRequest";
import { useSelector } from "react-redux";
const Profile = () => {
  useEffect(() => {
    getProfileDetailsRequest();
  });

  let profileData = useSelector((state) => state.profile.value);
  return <div>{JSON.stringify(profileData)}</div>;
};

export default Profile;
