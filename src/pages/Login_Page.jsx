import { Suspense, lazy } from "react";
import LazyLoader from "../components/masterLayOut/LazyLoader";
const Login = lazy(() => import("../components/login/Login"));
const Login_Page = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </div>
  );
};

export default Login_Page;
