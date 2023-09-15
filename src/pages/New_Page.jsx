import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
const New = lazy(()=>import("../components/new/New"))
const New_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <New/>
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default New_Page;
