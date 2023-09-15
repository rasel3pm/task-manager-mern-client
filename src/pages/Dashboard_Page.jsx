import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayout from "../components/masterLayOut/MasterLayOut";
const Dashboard = lazy(()=> import("../components/dashboard/Dashboard"))
const Dashboard_Page = () => {
  return (
    <>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <Dashboard/>
        </Suspense>
      </MasterLayout>
    </>
  );
};

export default Dashboard_Page;
