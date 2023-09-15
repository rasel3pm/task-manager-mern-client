import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
const Complete = lazy(()=>import("../components/completed/Complete"))

const Complete_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <Complete/>
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default Complete_Page;
