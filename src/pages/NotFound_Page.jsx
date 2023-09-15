import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
const NotFound = lazy(() => import("./../components/notFound/NotFound"));
const NotFound_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <NotFound />
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default NotFound_Page;
