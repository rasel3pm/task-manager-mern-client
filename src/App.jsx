import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard_Page from "./pages/Dashboard_Page";
import Create_Page from "./pages/Create_Page";
import New_Page from "./pages/New_Page";
import Progress_Page from "./pages/Progress_Page";
import Complete_Page from "./pages/Complete_Page";
import Cancel_Page from "./pages/Cancel_Page";
import Profile_Page from "./pages/Profile_Page";
import NotFound_Page from "./pages/NotFound_Page";
import FullscreenLoader from "./components/masterLayOut/FullScreenLoader";
import Login_Page from "./pages/Login_Page";
import Registration_Page from "./pages/Registration_Page";
import { getToken } from "./helper/appHelper";
import { Fragment } from "react";
import ProfileUpdate_Page from "./pages/ProfileUpdate_Page";
const App = () => {
  if (getToken()) {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard_Page />} />
            <Route path="/Create" element={<Create_Page />} />
            <Route path="/All" element={<New_Page />} />
            <Route path="/Progress" element={<Progress_Page />} />
            <Route path="/Completed" element={<Complete_Page />} />
            <Route path="/Canceled" element={<Cancel_Page />} />
            <Route path="/Profile" element={<Profile_Page />} />
            <Route
              path="/Profile-update/:id"
              element={<ProfileUpdate_Page />}
            />
            <Route path="*" element={<NotFound_Page />} />
          </Routes>
        </BrowserRouter>
        {/* <FullscreenLoader /> */}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/Login" replace />} /> */}
            <Route path="/Login" element={<Login_Page />} />
            <Route path="/Registration" element={<Registration_Page />} />
            <Route path="*" element={<NotFound_Page />} />
          </Routes>
        </BrowserRouter>
        {/* <FullscreenLoader /> */}
      </Fragment>
    );
  }
};

export default App;
