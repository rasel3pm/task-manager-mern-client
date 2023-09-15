import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
const Profile =lazy(()=>import('./../components/profile/Profile'))

const Profile_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <Profile />
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default Profile_Page;
