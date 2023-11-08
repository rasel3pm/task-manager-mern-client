import React, { Suspense } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
const SetPassword = () => import("../components/accountRecovery/SetPassword");
const ResetPassword_Page = () => {
  return (
    <div>
      <Suspense fallback={LazyLoader}>
        <SetPassword />
      </Suspense>
    </div>
  );
};

export default ResetPassword_Page;
