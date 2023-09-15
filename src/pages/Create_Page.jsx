import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
import MasterLayOut from "../components/masterLayOut/MasterLayOut";
const Create= lazy(()=>import("../components/create/Create"))

const Create_Page = () => {
  return (
    <div>
      <MasterLayOut>
        <Suspense fallback={<LazyLoader />}>
          <Create/>
        </Suspense>
      </MasterLayOut>
    </div>
  );
};

export default Create_Page;
