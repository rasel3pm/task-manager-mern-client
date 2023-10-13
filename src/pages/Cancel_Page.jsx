import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
const Canceled = lazy(() => import("../components/canceled/Canceled"));
const Cancel_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <Canceled />
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default Cancel_Page;
