import "./App.css";

import { DiseaseLib } from "./components/Library/diseaseLib";
import VideoPlayer from "./components/VideoCall/";
import Appointment from "./components/Appointment/index.js";
import { Booking } from "./components/Booking/Booking";

function App() {
  return (
    <div className="App">
      {/* <VideoPlayer /> */}
      {/* <DiseaseLib /> */}
      {/* <Appointment /> */}
      <Booking />
    </div>
  );
}

export default App;
