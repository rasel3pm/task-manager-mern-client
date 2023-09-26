import React, { Suspense } from "react";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import ProfileUpdate from "../components/profile/ProfileUpdate";

const ProfileUpdate_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <ProfileUpdate />
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default ProfileUpdate_Page;
