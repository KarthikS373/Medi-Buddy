import { useContext } from "react";

import "./App.css";

import { DiseaseLib } from "./components/Library/diseaseLib";
import VideoPlayer from "./components/VideoCall/";
import Appointment from "./components/Appointment/index.js";
import { Booking } from "./components/Booking/Booking";
import Organs from "./components/Organs";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Forum/pages/login/Login.jsx";
import TopBar from "./components/Forum/component/topbar/TopBar.jsx";
import Write from "./components/Forum/pages/write/Write.jsx";
import Settings from "./components/Forum/pages/settings/Settings.jsx";
import Register from "./components/Forum/pages/register/Register.jsx";
import Home from "./components/Forum/pages/home/Home.jsx";
import Single from "./components/Forum/pages/single/Single.jsx";
import { Context } from "./components/Forum/context/Context.js";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      {/* <VideoPlayer /> */}
      {/* <DiseaseLib /> */}
      {/* <Appointment /> */}
      {/* <Booking /> */}
      {/* <Organs /> */}
      <Routes>
        {/* <Route path="/home" element={<Home />}></Route> */}
        <Route
          exact
          path="/chat"
          element={
            <>
              <TopBar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route
          path="/settings"
          element={user ? <Settings /> : <Register />}
        ></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </div>
  );
}

export default App;
