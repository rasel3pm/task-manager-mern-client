import React, { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
const OTP = lazy(() => import("../components/accountRecovery/VerifyOTP"));
const ReceiveOTP_Page = () => {
  return (
    <div>
      <Suspense fallback={LazyLoader}>
        <OTP />
      </Suspense>
    </div>
  );
};

export default ReceiveOTP_Page;
