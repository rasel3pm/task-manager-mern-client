import React from "react";
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
import Login_Page from './pages/Login_Page';
import Registration_Page from './pages/Registration_Page';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard_Page />} />
          <Route exact path="/Create" element={<Create_Page />} />
          <Route exact path="/All" element={<New_Page />} />
          <Route exact path="/Progress" element={<Progress_Page />} />
          <Route exact path="/Completed" element={<Complete_Page />} />
          <Route exact path="/Canceled" element={<Cancel_Page />} />
          <Route exact path="/Profile" element={<Profile_Page />} />
          <Route exact path="/login" element={<Login_Page/>}/>
          <Route exact path="/Registration" element={<Registration_Page/>}/>
          <Route path="*" element={<NotFound_Page />} />
        </Routes>
      </BrowserRouter>
      {/* <FullscreenLoader /> */}
    </>
  );
};

export default App;
