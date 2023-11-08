import React, { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
const FindEmail = lazy(() => import("../components/accountRecovery/FindEmail"));
const RecoverEmail_Page = () => {
  return (
    <div>
      <Suspense fallback={LazyLoader}>
        <FindEmail />
      </Suspense>
    </div>
  );
};

export default RecoverEmail_Page;
