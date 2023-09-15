import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
const Progress = lazy(()=>import('./../components/progress/Progress'))
const Progress_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <Progress/>
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default Progress_Page;
