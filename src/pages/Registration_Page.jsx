import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
const Registration = lazy(() =>
  import("./../components/registration/Registration")
);
const Registration_Page = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </div>
  );
};

export default Registration_Page;
